# FOOD SAVER
---
## env guide
PORT = 8000

DATABASE = "mysql://u:pw@localhost:3306/food_saver"

JWT_SECRET

CLOUDINARY_NAME 

CLOUDINARY_API_KEY 

CLOUDINARY_API_SECRET

EMAIL = gmail

PASSWORD = from gmail application password


## Must Have API

### Allergen

| Method | Endpoint         | Description                                | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------|--------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| POST   | /allergen        | Create a new allergen (Admin only).       | Yes           | ADMIN   | No         | No        | { name, description }         |
| GET    | /allergen        | Retrieve allergens.                        | Yes           | All users | No      | { id, name, description, sortBy, sortOrder, page, limit } | No |
| PATCH  | /allergen/:id    | Update allergen by ID (Admin only).      | Yes           | ADMIN   | id        | No        | { name, description }         |
| DELETE | /allergen/:id    | Delete allergen by ID (Admin only).      | Yes           | ADMIN   | id        | No        | No                            |

### Auth

| Method | Endpoint                  | Description                              | Auth Required | Roles   | req.params | req.query | req.body                                        |
|--------|---------------------------|------------------------------------------|---------------|---------|------------|-----------|-------------------------------------------------|
| POST   | /auth/login               | User login.                              | No            | -       | No         | No        | { email, password }                             |
| POST   | /auth/register            | User registration.                       | No            | -       | No         | No        | { firstName, lastName, email, password, confirmPassword, role, address, phoneNumber } |
| POST   | /auth/forgot-password     | Request password reset.                 | No            | -       | No         | No        | { emailForgetPassword }                          |
| PATCH  | /auth/reset-password      | Reset user password.                    | Yes           | -       | No         | No        | { password, confirmPassword }                    |

### Cart Item

| Method | Endpoint         | Description                                | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------|--------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| POST   | /cart-items       | Add item to cart (Buyer only).            | Yes           | BUYER   | No         | No        | { productId, quantity }      |
| GET    | /cart-items       | Retrieve user’s cart items (Buyer/Admin).| Yes           | ADMIN, BUYER | No      | { id, userId, productId, minQuantity, maxQuantity, sortBy, sortOrder, page, limit } | No |
| PATCH  | /cart-items/:id   | Update cart item by ID (Owner only).     | Yes           | BUYER   | id        | No        | { quantity }                 |
| DELETE | /cart-items/:id   | Delete cart item by ID (Owner only).     | Yes           | BUYER   | id        | No        | No                            |

### Category

| Method | Endpoint         | Description                                | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------|--------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| POST   | /category        | Create a new category (Admin only).       | Yes           | ADMIN   | No         | No        | { name, description, imageUrl(file) } |
| GET    | /category        | Retrieve all categories.                   | Yes           | All users | No      | { id, name, description, sortBy, sortOrder, page, limit } | No |
| PATCH  | /category/:id    | Update category by ID (Admin only).       | Yes           | ADMIN   | id        | No        | { name, description, imageUrl(file) } |
| DELETE | /category/:id    | Delete category by ID (Admin only).       | Yes           | ADMIN   | id        | No        | No                            |

### Donation

| Method | Endpoint         | Description                                | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------|--------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| POST   | /donation        | Create a donation (Seller only).          | Yes           | SELLER  | No         | No        | { foundationId, totalPrice, productDonation :[{productId, quantity}], imageUrl(file) } |
| GET    | /donation        | Retrieve all donations.                    | Yes           | All users | No      | { id, sellerId, foundationId, isVerify, minTotalPrice, maxTotalPrice, startDate, endDate, sortBy, sortOrder, page, limit } | No |
| PATCH  | /donation/:id    | Verify donation (Admin only).              | Yes           | ADMIN   | id        | No        | { isVerify }                 |
| DELETE | /donation/:id    | Delete donation (Admin only).              | Yes           | ADMIN   | id        | No        | No                            |

### Foundation

| Method | Endpoint         | Description                                | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------|--------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| POST   | /foundations      | Create a foundation (Admin only).         | Yes           | ADMIN   | No         | No        | { name, contactInfo, address, profilePicture(file) } |
| GET    | /foundations      | Retrieve all foundations.                  | No            | All users | No      | { id, name, contactInfo, address, sortBy, sortOrder, page, limit } | No |
| PATCH  | /foundations/:id  | Update foundation (Admin only).           | Yes           | ADMIN   | id        | No        | { name, contactInfo, address, profilePicture(file) } |
| DELETE | /foundations/:id  | Delete foundation (Admin only).           | Yes           | ADMIN   | id        | No        | No                            |

### Notification

| Method | Endpoint                 | Description                                 | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|--------------------------|---------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| GET    | /notifications           | Retrieve user notifications.                | Yes           | -       | No         | No        | No                            |
| PATCH  | /notifications/:id/read  | Mark notification as read.                  | Yes           | -       | id        | No        | No                            |

### Order

| Method | Endpoint         | Description                                | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------|--------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| POST   | /order           | Create a new order (Buyer only).          | Yes           | BUYER   | No         | No        | { paymentMethod, orderItems : [{productId, quantity, unitPrice}] } |
| GET    | /order           | Retrieve all orders (Admin only).         | Yes           | ADMIN   | No         | No        | No                            |
| GET    | /order/:id       | Retrieve order by ID (Buyer/Admin).       | Yes           | BUYER, ADMIN | id      | No        | No                            |
| GET    | /order/:buyerId/buyer | Retrieve all orders by buyerID (Buyer). | Yes           | BUYER   | buyerId    | No        | No                            |
| GET    | /order/:sellerId/orderItems | Retrieve all orders by sellerID (Seller). | Yes           | SELLER   | sellerId   | No        | No                            |
| PATCH  | /order/:id       | Update order by ID (Admin only).          | Yes           | ADMIN   | id        | No        | { paymentMethod, paymentStatus, isPickUpped } |
| DELETE | /order/:id       | Delete order by ID (Admin only).          | Yes           | ADMIN   | id        | No        | No                            |

### Product

| Method | Endpoint                     | Description                                     | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------------------|-------------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| POST   | /products                    | Create a new product (Seller only).            | Yes           | SELLER  | No         | No        | { name, description, originalPrice, salePrice, expirationDate, quantity, imageUrl(file), categoryId : [categoryId], allergenId : [allergenId] } |
| GET    | /products                    | Retrieve all products.                          | No            | -       | No         | { id, storeId, name, salePrice } | No |
| PATCH  | /products/:id                | Update product by ID (Seller only).            | Yes           | SELLER  | id        | No        | { name, description, originalPrice, salePrice, expirationDate, quantity, imageUrl(file), categoryId : [{categoryId}], allergenId : [{allergenId}] } |
| DELETE | /products/:id                | Delete product by ID (Admin or Seller).        | Yes           | ADMIN, SELLER | id      | No        | No                            |
| (optional) POST | /products/:id/categories | Assign categories to product (Seller only).    | Yes           | SELLER  | id        | No        | { categories : [categoryId] } |
| (optional) POST | /products/:id/allergens | Assign allergens to product (Seller only).     | Yes           | SELLER  | id        | No        | { allergens : [allergens] }  |

### Store

| Method | Endpoint         | Description                                  | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------|----------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| POST   | /stores          | Create a new store (Seller only).           | Yes           | SELLER  | No         | No        | { storeName, storeAddress, storeDetails, phoneNumber, timeOpen, timeClose, latitude, longitude, profilePicture(file) } |
| GET    | /stores          | Retrieve all stores.                         | No            | -       | No         | { id, userId, storeName, storeAddress, status, latitude, longitude } | No |
| GET    | /stores/:id      | Retrieve store by ID.                        | No            | -       | id        | No        | No                            |
| PATCH  | /stores/:id      | Update store by ID (Owner only).            | Yes           | SELLER  | id        | No        | { storeName, storeAddress, storeDetails, phoneNumber, timeOpen, timeClose, latitude, longitude, profilePicture(file) } |
| DELETE | /stores/:id      | Delete store by ID (Admin or Owner).        | Yes           | ADMIN, SELLER | id      | No        | No                            |

### User

| Method | Endpoint         | Description                                  | Auth Required | Roles   | req.params | req.query | req.body                      |
|--------|------------------|----------------------------------------------|---------------|---------|------------|-----------|-------------------------------|
| GET    | /users/me        | Retrieve current user profile.               | Yes           | -       | No         | No        | No                            |
| PATCH  | /users/me        | Update current user profile. (Admin or Owner). | Yes           | -       | No         | No        | No                            |
| DELETE | /users/:id       | Delete user by ID (Admin or Owner).         | Yes           | ADMIN, SELLER | id      | No        | No                            |
| GET    | /users           | Retrieve all users (Admin only).             | Yes           | ADMIN   | No         | No        | No                            |

