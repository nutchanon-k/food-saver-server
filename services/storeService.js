const { equal } = require("joi");
const prisma = require("../configs/prisma");

module.exports.getStoreByUserId = (userId) => {
  return prisma.store.findUnique({
    where: {
      userId: +userId,
    },
  });
};

module.exports.createStoreService = async (data) => {
  return await prisma.store.create({
    data: data,
  });
};

module.exports.getStoreById = async (id) => {
  return await prisma.store.findUnique({
    where: {
      id: +id,
    },
  });
};

module.exports.updateStoreService = (storeId, storeData) => {
  return prisma.store.update({
    where: {
      id: +storeId,
    },
    data: storeData,
  });
};

// module.exports.getStoreArrayService = () => {
//   return prisma.store.findMany()
// }
module.exports.getStoreArrayService = async (filters) => {
  const whereClause = {};

  // If wanna find store in radius
  if (filters.radius && filters.latitude && filters.longitude) {
    const radiusInKm = parseFloat(filters.radius);
    const lat = parseFloat(filters.latitude);
    const lon = parseFloat(filters.longitude);

    const latRange = radiusInKm / 111.32;
    const lonRange = radiusInKm / (111.32 * Math.cos(lat * (Math.PI / 180)));

    whereClause.latitude = {
      gte: lat - latRange,
      lte: lat + latRange,
    };
    whereClause.longitude = {
      gte: lon - lonRange,
      lte: lon + lonRange,
    };
  }
  // Add filters to the whereClause based on provided filters
  if (filters.id) {
    whereClause.id = +filters.id;
  }

  if (filters.userId) {
    whereClause.userId = parseInt(filters.userId);
  }

  if (filters.storeName) {
    // Using a case-insensitive search workaround
    whereClause.storeName = {
      contains: filters.storeName,
      not: {
        equals: "", // Optional: If you want to exclude empty strings
      },
    };
  }

  if (filters.storeAddress) {
    whereClause.storeAddress = {
      contains: filters.storeAddress,
      not: {
        equals: "",
      },
    };
  }

  if (filters.status) {
    whereClause.status = filters.status;
  }

  if (filters.isVerify) {
    if (filters.isVerify === "true") {
      whereClause.isVerify = true
    } else if (filters.isVerify === "false") {
      whereClause.isVerify = false
    }
  }

  // if (filters.latitude) {
  //   whereClause.latitude = {
  //     lte: parseFloat(filters.latitude),
  //   };
  // }

  // if (filters.longitude) {
  //   whereClause.longitude = {
  //     lte: parseFloat(filters.longitude),
  //   };
  // }

  if (filters.search) {
    const searchConditions = [
      { storeName: { contains: filters.search } },
      { storeAddress: { contains: filters.search } },
      {
        products: {
          some: {
            name: { contains: filters.search }
          }
        }
      },
    ];

    // หากต้องการรวม id ในการค้นหา ถ้า search เป็นตัวเลข
    if (!isNaN(filters.search)) {
      // searchConditions.push({ userId: Number(filters.search) });
      searchConditions.push({ id: Number(filters.search) });
    }
    whereClause.OR = searchConditions;
  }
  const orderBy = {};
  if (filters.sortBy) {
    orderBy[filters.sortBy] = filters.sortOrder === 'asc' ? 'asc' : 'desc';
  }

  // กำหนดการแบ่งหน้าแบบเงื่อนไข
  let take;
  let skip;

  if (filters.page && filters.limit) {
    take = +filters.limit;
    skip = (+filters.page - 1) * take;
  }
  
  
  const dataForCount = {
    where : whereClause,
  }

  const countStore = await prisma.store.count(dataForCount) 
  let totalPages = 1
  if(filters.limit) {
       totalPages = Math.ceil(countStore / filters.limit);   
  }


  const stores = await prisma.store.findMany({
    where: whereClause,
    orderBy: filters.sortBy ? orderBy : undefined,
    skip,
    take,
    include: filters.products ? {
      products: {
        select: {
          id: true,
          description: true,
          originalPrice: true,
          salePrice: true,
          imageUrl: true,
          name: true,
          quantity: true,
        },
      },
    } : undefined,
  });

  // Calculate for circular filtering
  if (filters.radius && filters.latitude && filters.longitude) {
    const radiusInKm = parseFloat(filters.radius); // Ensure radiusInKm is available in this scope as well
    const lat = parseFloat(filters.latitude);
    const lon = parseFloat(filters.longitude);
    const earthRadiusKm = 6371;

    function calculateDistance(lat1, lon1, lat2, lon2) {
      const toRad = (value) => (value * Math.PI) / 180;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return earthRadiusKm * c;
    }
    // Filter stores by exact circular radius
    stores.filter((store) => {
      const distance = calculateDistance(
        lat,
        lon,
        store.latitude,
        store.longitude
      );
      store.distance = distance;
      return distance <= radiusInKm;
    });
  }
  // If latitude/longitude are not provided, return the stores as-is (no radius filtering)
  return {stores : stores, totalPage: totalPages, countStore: countStore};
};

module.exports.getStoreService = (storeId) => {
  return prisma.store.findUnique({
    where: {
      id: +storeId,
    },
    select: {
      userId: true,
      storeName: true,
      storeAddress: true,
      storeDetails: true,
      profilePicture: true,
      status: true,
      phoneNumber: true,
      timeOpen: true,
      timeClose: true,
      latitude: true,
      longitude: true,
    },
  });
};


module.exports.updateStoreVerifyService = (storeId, verify) => {
  return prisma.store.update({
    where: {
      id: +storeId,
    },
    data: {
      isVerify: verify,
    },
  });
}
module.exports.getStoreArrayNoCountService = async (filters) => {
  const whereClause = {};

  // If wanna find store in radius
  if (filters.radius && filters.latitude && filters.longitude) {
    const radiusInKm = parseFloat(filters.radius);
    const lat = parseFloat(filters.latitude);
    const lon = parseFloat(filters.longitude);

    const latRange = radiusInKm / 111.32;
    const lonRange = radiusInKm / (111.32 * Math.cos(lat * (Math.PI / 180)));

    whereClause.latitude = {
      gte: lat - latRange,
      lte: lat + latRange,
    };
    whereClause.longitude = {
      gte: lon - lonRange,
      lte: lon + lonRange,
    };
  }

  // Add filters to the whereClause based on provided filters
  if (filters.id) {
    whereClause.id = +filters.id;
  }

  if (filters.userId) {
    whereClause.userId = parseInt(filters.userId);
  }

  if (filters.storeName) {
    // Using a case-insensitive search workaround
    whereClause.storeName = {
      contains: filters.storeName,
      not: {
        equals: "", // Optional: If you want to exclude empty strings
      },
    };
  }

  if (filters.storeAddress) {
    whereClause.storeAddress = {
      contains: filters.storeAddress,
      not: {
        equals: "",
      },
    };
  }

  if (filters.status) {
    whereClause.status = filters.status;
  }

  if (filters.allergen) {
    filters.allergen = filters.allergen.split(",");
    whereClause.allergens = {
      some: {
        productAllergens: {
          some: {
            allergenId: {
              in: filters.allergen.map((id) => +id), // Array of allergen IDs
            },
          },
        },
      },
    };
  }

  if (filters.category) {
    filters.category = filters.category.split(","); // Split category IDs into an array
    whereClause.products = {
      some: {
        productCategories: {
          some: {
            categoryId: {
              in: filters.category.map((id) => +id), // Convert category IDs to numbers
            },
          },
        },
      },
    };
  }

  if (filters.search) {
    const searchConditions = [
      { storeName: { contains: filters.search } },
      { storeAddress: { contains: filters.search } },
      {
        products: {
          some: {
            name: { contains: filters.search },
          },
        },
      },
    ];

    // หากต้องการรวม id ในการค้นหา ถ้า search เป็นตัวเลข
    if (!isNaN(filters.search)) {
      searchConditions.push({ id: Number(filters.search) });
    }
    whereClause.OR = searchConditions;
  }

  const orderBy = {};
  if (filters.sortBy) {
    orderBy[filters.sortBy] = filters.sortOrder === "asc" ? "asc" : "desc";
  }

  let take;
  let skip;

  if (filters.page && filters.limit) {
    take = +filters.limit;
    skip = (+filters.page - 1) * take;
  }

  let stores = await prisma.store.findMany({
    where: {
      ...(filters.allergen?.length
        ? {
            products: {
              some: {
                productAllergens: {
                  some: {
                    allergenId: { in: filters.allergen.map((id) => +id) },
                  },
                },
              },
            },
          }
        : {}),
      ...(filters.category?.length
        ? {
            products: {
              some: {
                productCategories: {
                  some: {
                    categoryId: { in: filters.category.map((id) => +id) },
                  },
                },
              },
            },
          }
        : {}),
      // Additional filtering criteria can be added here as needed
    },
    include: {
      products: {
        select: {
          id: true,
          description: true,
          originalPrice: true,
          salePrice: true,
          imageUrl: true,
          name: true,
          quantity: true,
          productAllergens: {
            include: {
              allergen: {
                select: {
                  name: true,
                },
              },
            },
          },
          productCategories: {
            include: {
              category: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: filters.sortBy ? orderBy : undefined,
    skip,
    take,
  });

  // Calculate for circular filtering
  if (filters.radius && filters.latitude && filters.longitude) {
    const radiusInKm = parseFloat(filters.radius); // Ensure radiusInKm is available in this scope as well
    const lat = parseFloat(filters.latitude);
    const lon = parseFloat(filters.longitude);
    const earthRadiusKm = 6371;

    function calculateDistance(lat1, lon1, lat2, lon2) {
      const toRad = (value) => (value * Math.PI) / 180;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return earthRadiusKm * c;
    }
    // Filter stores by exact circular radius
    stores = stores.filter((store) => {
      const distance = calculateDistance(
        lat,
        lon,
        store.latitude,
        store.longitude
      );
      store.distance = distance; // Add distance to store for reference
      return distance <= radiusInKm;
    });
  }
  // If latitude/longitude are not provided, return the stores as-is (no radius filtering)
  return { stores: stores };
};
