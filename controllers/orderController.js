require("dotenv").config();
const createError = require('../utils/createError')
const { createOrderService, getOrderByIdService, getAllOrdersService, updateOrderService, deleteOrderService, getOrderByUserIdService, getOrderItemsBySellerIdService } = require("../services/orderService");
const { getProductService, getProductByOrderItems, updateProductService, getProductBySellerIdService } = require("../services/productService");
const { createNotification } = require("../services/notificationService");

// model Order {
//     id            Int           @id @default(autoincrement())
//     userId        Int           @map("user_id")
//     totalPrice    Decimal       @map("total_price") @db.Decimal(10, 2)
//     paymentStatus PaymentStatus @default(PENDING) @map("payment_status")
//     paymentMethod PaymentMethod @map("payment_method")
//     createdAt     DateTime      @default(now()) @map("created_at")
//     updatedAt     DateTime      @updatedAt @map("updated_at")
//     isPickUpped   Boolean       @default(false) @map("is_picked_up")

//     // Relations
//     user       User        @relation(fields: [userId], references: [id], onDelete: Cascade )
//     orderItems OrderItem[]
//   }
// model OrderItem {
//     id        Int     @id @default(autoincrement())
//     orderId   Int     @map("order_id")
//     productId Int     @map("product_id")
//     quantity  Int
//     unitPrice  Decimal @map("unit_price") @db.Decimal(10, 2)

//     // Relations
//     order   Order   @relation(fields: [orderId], references: [id], onDelete: Cascade )
//     product Product @relation(fields: [productId], references: [id], onDelete: Cascade )
//   }

//ส่ง order item มาเป็น array เช่น orderItems: [{ productId: 1, quantity: 2 }, { productId: 3, quantity: 1 }]

module.exports.createOrder = async (req, res, next) => {

    try {
        const userId = req.user.id;
        const { paymentMethod, orderItems } = req.body;

        const totalPrice = orderItems.reduce((total, item) => {
            return total + (Number(item.unitPrice) * Number(item.quantity));
        }, 0);
        
        for (const item of orderItems) {
            try {
                const product = await getProductService(Number(item.productId));
                
                if (!product) {                    
                    return next(createError(400, `Product with ID ${item.productId} not found`));
                }

                
                if (Number(product.quantity) < Number(item.quantity)) {
                    return next(createError(400, `Insufficient quantity for product ID ${item.productId}`));
                }

                // หักสินค้าจาก stock
                await updateProductService(product.id, { quantity: product.quantity - item.quantity });
                
            } catch (err) {
                // Pass any unexpected errors to the error handler
                return next(err);
            }
        }
        // console.log("TESTxxxxxxx", totalPrice)
        const orderData = {
            userId: +userId,
            totalPrice: +totalPrice,
            paymentMethod: paymentMethod,
            orderItems: orderItems,
        };

        const order = await createOrderService(orderData);
        res.status(201).json(
            {
                message: 'Order created successfully',
                order
            })
    } catch (err) {
        next(err);
    }
}

module.exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await getAllOrdersService();
        res.status(200).json({
            message: 'Get all orders successfully',
            orders
        })
    } catch (err) {
        next(err);
    }
}

module.exports.getOrderById = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return createError(400, "Order id is required")
        }
        if (isNaN(id) || id <= 0 || id % 1 !== 0) {
            return createError(400, "Order id must be a positive integer")
        }

        const orders = await getOrderByIdService(+id);
        if (!orders || orders.length === 0) {
            return createError(404, "Order not found")
        }
        res.status(200).json({
            message: 'Get all orders successfully',
            orders
        })
    } catch (err) {
        next(err);
    }
}

module.exports.updateOrder = async (req, res, next) => {
    try {
        const { paymentMethod, paymentStatus, isPickUpped } = req.body
        const { id } = req.params
        if (!id) {
            return createError(400, "Order id is required")
        }
        if (isNaN(id) || id <= 0 || id % 1 !== 0) {
            return createError(400, "Order id must be a positive integer")
        }
        const order = await getOrderByIdService(+id);
        if (!order || order.length === 0) {
            return createError(404, "Order not found")
        }
        const data = {}
        if (paymentMethod) {
            data.paymentMethod = paymentMethod
        }
        if (paymentStatus) {
            data.paymentStatus = paymentStatus
        }
        if (isPickUpped) {
            if (isPickUpped === 'true') {
                data.isPickUpped = true
            } else {
                data.isPickUpped = false
            }
        }
        const updatedOrder = await updateOrderService(+id, data);


        // Notification
        // ตรวจสอบว่ามีการเปลี่ยนแปลง paymentStatus เป็น COMPLETED หรือไม่
        const isPaymentStatusCompleted = paymentStatus === 'COMPLETED' && order.paymentStatus !== 'COMPLETED';

        // หาก paymentStatus เปลี่ยนเป็น COMPLETED ให้ส่ง Notification ไปยัง Seller
        if (isPaymentStatusCompleted) {
            // ดึง Sellers ที่เกี่ยวข้องกับ OrderItems
            const store = await getProductByOrderItems(updatedOrder.orderItems)
            // console.log("store", store)

            const uniqueSellerIds = [...new Set(store.map(store => store.store.userId))];
            // console.log("uniqueSellerIds", uniqueSellerIds)

            // สร้าง Notification สำหรับแต่ละ Seller
            const notifications = await Promise.all(uniqueSellerIds.map(sellerId => {
                return createNotification(sellerId, 'ORDER_IS_PAID', `Order Id #${updatedOrder.id} has been completed.`);
            }));
        }

        res.status(200).json({
            message: 'Order updated successfully',
            updatedOrder
        })


    } catch (err) {
        next(err);
    }
}

module.exports.deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) {
            return createError(400, "Order id is required")
        }
        if (isNaN(id) || id <= 0 || id % 1 !== 0) {
            return createError(400, "Order id must be a positive integer")
        }
        const order = await getOrderByIdService(+id);
        if (!order || order.length === 0) {
            return createError(404, "Order not found")
        }


        // คืนสินค้า ใน orderItems ที่ถูกลบ
        const orderItems = order.orderItems
        for (const item of orderItems) {
            const product = await getProductService(item.productId)
            await updateProductService(product.id, {quantity: product.quantity + item.quantity})
        }
        
        const deletedOrder = await deleteOrderService(+id);

        res.status(200).json({
            message: 'Order deleted successfully',
        })
    } catch (err) {
        next(err);
    }
}

module.exports.getBuyerOrders = async (req, res, next) => {
    try {
        const userId = req.user.id
        const orders = await getOrderByUserIdService(+userId)

        if (!orders || orders.length === 0) {
            return createError(404, "Order not found")
        }
        res.status(200).json({
            message: 'Get all orders successfully',
            orders
        })
    } catch (err) {
        next(err);
    }
}


module.exports.getOrderItemBySellerId = async (req, res, next) => {
    try {
        const sellerId = req.user.id
        const orderItems = await getOrderItemsBySellerIdService(+sellerId)

        // if (!products || products.length === 0) {
        //     return createError(404, "Product not found")
        // }
    
        // const orderItems = products.map(product => product.orderItems)
        console.log(orderItems)
        res.status(200).json({
            message: 'Get all orders successfully',
            orderItems
        })
    } catch (err) {
        next(err);
    }
}
