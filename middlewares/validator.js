const Joi = require('joi')
const createError = require('../utils/createError')


// Define the Role enum values
const roleEnum = ['SELLER', 'BUYER', 'ADMIN'];

// Regular expression for password: At least 8 characters, one uppercase, one lowercase, one number, and one special character
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Regular expression for phone number (simple version, adjust as needed)
const phoneRegex = /^\d{9,10}$/;
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/




// Schema for user login
const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': `"email" should be a type of 'text'`,
      'string.empty': `"email" cannot be an empty field`,
      'string.email': `"email" must be a valid email`,
      'any.required': `"email" is a required field`,
    }),

  password: Joi.string()
    .required()
    .messages({
      'string.base': `"password" should be a type of 'text'`,
      'string.empty': `"password" cannot be an empty field`,
      'any.required': `"password" is a required field`,
    }),
}).messages({
  'object.base': 'Invalid login data',
});

// Schema for creating a new user
const createUserSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.base': `"firstName" should be a type of 'text'`,
      'string.empty': `"firstName" cannot be an empty field`,
      'string.min': `"firstName" should have a minimum length of {#limit}`,
      'string.max': `"firstName" should have a maximum length of {#limit}`,
      'any.required': `"firstName" is a required field`,
    }),

  lastName: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.base': `"lastName" should be a type of 'text'`,
      'string.empty': `"lastName" cannot be an empty field`,
      'string.min': `"lastName" should have a minimum length of {#limit}`,
      'string.max': `"lastName" should have a maximum length of {#limit}`,
      'any.required': `"lastName" is a required field`,
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': `"email" should be a type of 'text'`,
      'string.email': `"email" must be a valid email`,
      'string.empty': `"email" cannot be an empty field`,
      'any.required': `"email" is a required field`,
    }),

  password: Joi.string()
    // .pattern(passwordRegex)
    .required()
    .messages({
      'string.base': `"password" should be a type of 'text'`,
      'string.empty': `"password" cannot be an empty field`,
      // 'string.pattern.base': `"password" must be at least 8 characters long, include uppercase, lowercase, number, and special character`,
      'any.required': `"password" is a required field`,
    }),
  confirmPassword: Joi
    .string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Confirm password not match the password.',
      'string.empty': 'Confirm password is required.',
    }),

  role: Joi.string()
    .valid(...roleEnum)
    .default('BUYER')
    .messages({
      'any.only': `"role" must be one of [${roleEnum.join(', ')}]`,
    }),

  profilePicture: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': `"profilePicture" must be a valid URI`,
    }),

  address: Joi.string()
    .max(255)
    .optional()
    .messages({
      'string.base': `"address" should be a type of 'text'`,
      'string.max': `"address" should have a maximum length of 255`,
    }),

  phoneNumber: Joi.string()
    .pattern(phoneRegex)
    .optional()
    .messages({
      'string.pattern.base': `"phoneNumber" must be a valid phone number`,
    }),

  isActive: Joi.boolean()
    .optional()
    .default(true)
    .messages({
      'boolean.base': `"isActive" must be a boolean`,
    }),
});

// Schema for updating an existing user
const updateUserSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(50)
    .optional()
    .messages({
      'string.base': `"firstName" should be a type of 'text'`,
      'string.empty': `"firstName" cannot be an empty field`,
      'string.min': `"firstName" should have a minimum length of {#limit}`,
      'string.max': `"firstName" should have a maximum length of {#limit}`,
    }),

  lastName: Joi.string()
    .min(2)
    .max(50)
    .optional()
    .messages({
      'string.base': `"lastName" should be a type of 'text'`,
      'string.empty': `"lastName" cannot be an empty field`,
      'string.min': `"lastName" should have a minimum length of {#limit}`,
      'string.max': `"lastName" should have a maximum length of {#limit}`,
    }),

  email: Joi.string()
    .email()
    .optional()
    .messages({
      'string.base': `"email" should be a type of 'text'`,
      'string.email': `"email" must be a valid email`,
      'string.empty': `"email" cannot be an empty field`,
    }),

  password: Joi.string()
    // .pattern(passwordRegex)
    .optional()
    .messages({
      'string.base': `"password" should be a type of 'text'`,
      'string.empty': `"password" cannot be an empty field`,
      // 'string.pattern.base': `"password" must be at least 8 characters long, include uppercase, lowercase, number, and special character`,
    }),

  role: Joi.string()
    .valid(...roleEnum)
    .optional()
    .messages({
      'any.only': `"role" must be one of [${roleEnum.join(', ')}]`,
    }),

  profilePicture: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': `"profilePicture" must be a valid URI`,
    }),

  address: Joi.string()
    .max(255)
    .optional()
    .messages({
      'string.base': `"address" should be a type of 'text'`,
      'string.max': `"address" should have a maximum length of {#limit}`,
    }),

  phoneNumber: Joi.string()
    .pattern(phoneRegex)
    .optional()
    .messages({
      'string.pattern.base': `"phoneNumber" must be a valid phone number`,
    }),

  isActive: Joi.boolean()
    .optional()
    .messages({
      'boolean.base': `"isActive" must be a boolean`,
    }),
})

const allowedSortByFieldsUser = ['id', 'firstName', 'lastName', 'email', 'role', 'phoneNumber', 'isActive'];

// Define allowed roles
const allowedRolesUser = ['ADMIN', 'BUYER', 'SELLER']; // Adjust as needed according to your model

// Create schema for searching User
module.exports.searchUserSchema = Joi.object({
  id: Joi.number().integer().positive()
    .messages({
      'number.base': '"id" must be a number',
      'number.integer': '"id" must be an integer',
      'number.positive': '"id" must be a positive number',
    }),
  firstName: Joi.string().max(50)
    .messages({
      'string.base': '"firstName" must be a string',
      'string.empty': '"firstName" cannot be empty',
      'string.max': '"firstName" must be at most 50 characters long',
    }),
  lastName: Joi.string().max(50)
    .messages({
      'string.base': '"lastName" must be a string',
      'string.empty': '"lastName" cannot be empty',
      'string.max': '"lastName" must be at most 50 characters long',
    }),
  email: Joi.string().email().max(100)
    .messages({
      'string.base': '"email" must be a string',
      'string.email': '"email" must be a valid email',
      'string.max': '"email" must be at most 100 characters long',
    }),
  role: Joi.string().valid(...allowedRolesUser)
    .messages({
      'string.base': '"role" must be a string',
      'any.only': `"role" must be one of [${allowedRolesUser.join(', ')}]`,
    }),
  phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).optional()
    .messages({
      'string.base': '"phoneNumber" must be a string',
      'string.pattern.base': '"phoneNumber" must be a 10-digit number',
    }),
  isActive: Joi.boolean().optional()
    .messages({
      'boolean.base': '"isActive" must be a boolean (true or false)',
    }),
  sortBy: Joi.string().valid(...allowedSortByFieldsUser).optional()
    .messages({
      'string.base': '"sortBy" must be a string',
      'any.only': `"sortBy" must be one of [${allowedSortByFieldsUser.join(', ')}]`,
    }),
  sortOrder: Joi.string().valid('asc', 'desc').optional()
    .messages({
      'string.base': '"sortOrder" must be a string',
      'any.only': '"sortOrder" must be "asc" or "desc"',
    }),
  page: Joi.number().integer().min(1).default(1)
    .messages({
      'number.base': '"page" must be a number',
      'number.integer': '"page" must be an integer',
      'number.min': '"page" must be at least 1',
    }),
  limit: Joi.number().integer().min(1).max(200)
    .messages({
      'number.base': '"limit" must be a number',
      'number.integer': '"limit" must be an integer',
      'number.min': '"limit" must be at least 1',
      'number.max': '"limit" must be at most 200',
    }),
})












const createStoreSchema = Joi.object({
  storeName: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.base': `"storeName" should be a type of 'text'`,
      'string.empty': `"storeName" cannot be an empty field`,
      'string.min': `"storeName" should have a minimum length of {#limit}`,
      'string.max': `"storeName" should have a maximum length of {#limit}`,
      'any.required': `"storeName" is a required field`,
    }),
  storeAddress: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.base': `"storeAddress" should be a type of 'text'`,
      'string.empty': `"storeAddress" cannot be an empty field`,
      'string.min': `"storeAddress" should have a minimum length of {#limit}`,
      'string.max': `"storeAddress" should have a maximum length of {#limit}`,
      'any.required': `"storeAddress" is a required field`,
    }),
  storeDetails: Joi.string()
    .min(2)
    .max(100)
    .optional()
    .messages({
      'string.base': `"storeAddress" should be a type of 'text'`,
      'string.min': `"storeAddress" should have a minimum length of {#limit}`,
      'string.max': `"storeAddress" should have a maximum length of {#limit}`,
    }),
  profilePicture: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': `"profilePicture" must be a valid URI`,
    }),
  phoneNumber: Joi.string()
    .pattern(phoneRegex)
    .optional()
    .messages({
      'string.pattern.base': `"phoneNumber" must be a valid phone number`,
    }),
  timeOpen: Joi.string()
    .pattern(timeRegex)
    .required()
    .messages({
      'string.base': `"timeOpen" should be a valid time in HH:mm format`,
      'string.empty': `"timeOpen" cannot be an empty field`,
      'string.pattern.base': `"timeOpen" should follow the HH:mm format`,
      'any.required': `"timeOpen" is a required field`,
    }),
  timeClose: Joi.string()
    .pattern(timeRegex)
    .required()
    .messages({
      'string.base': `"timeClose" should be a valid time in HH:mm format`,
      'string.empty': `"timeClose" cannot be an empty field`,
      'string.pattern.base': `"timeClose" should follow the HH:mm format`,
      'any.required': `"timeClose" is a required field`,
    }),
  latitude: Joi.number()
    .min(-90)
    .max(90)
    .required()
    .messages({
      'number.base': `"latitude" should be a valid number`,
      'number.min': `"latitude" should not be less than -90`,
      'number.max': `"latitude" should not be more than 90`,
      'any.required': `"latitude" is a required field`,
    }),
  longitude: Joi.number()
    .min(-180)
    .max(180)
    .required()
    .messages({
      'number.base': `"longitude" should be a valid number`,
      'number.min': `"longitude" should not be less than -180`,
      'number.max': `"longitude" should not be more than 180`,
      'any.required': `"longitude" is a required field`,
    })
}).custom((obj, helpers) => {
  // Additional custom validation for timeOpen < timeClose
  const [openHour, openMinute] = obj.timeOpen.split(':').map(Number);
  const [closeHour, closeMinute] = obj.timeClose.split(':').map(Number);

  if (openHour > closeHour || (openHour === closeHour && openMinute >= closeMinute)) {
    return helpers.message(`"timeClose" should be after "timeOpen"`);
  }
  return obj;
});

const createProductSchema = Joi.object({
  // name,
  name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.base': `"name" should be a type of 'text'`,
      'string.empty': `"name" cannot be an empty field`,
      'string.min': `"name" should have a minimum length of {#limit}`,
      'string.max': `"name" should have a maximum length of {#limit}`,
    }),
  // description,
  description: Joi.string()
    .min(2)
    .max(100)
    .optional()
    .messages({
      'string.base': `"description" should be a type of 'text'`,
      'string.min': `"description" should have a minimum length of {#limit}`,
      'string.max': `"description" should have a maximum length of {#limit}`,
    }),
  // originalPrice,
  originalPrice: Joi.number()
    .precision(2)
    .positive()
    .required()
    .messages({
      'number.base': `"originalPrice" should be a type of 'number'`,
      'number.positive': `"originalPrice" should be a positive number`,
      'number.precision': `"originalPrice" should have at most {#limit} decimal places`,
    }),

  // salePrice,
  salePrice: Joi.number()
    .precision(2)
    .positive()
    .required()
    .messages({
      'number.base': `"salePrice" should be a type of 'number'`,
      'number.positive': `"salePrice" should be a positive number`,
      'number.precision': `"salePrice" should have at most {#limit} decimal places`,
    }),

  // expirationDate,
  expirationDate: Joi.date()
    .optional()
    .messages({
      'date.base': `"expirationDate" should be a valid date`,
    }),

  // quantity,
  quantity: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      'number.base': `"quantity" should be a type of 'number'`,
      'number.integer': `"quantity" should be an integer`,
      'number.min': `"quantity" should be at least {#limit}`,
    }),
  imageUrl: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': `"imageUrl" must be a valid URI`,
    }),
}).custom((obj, helpers) => {
  // Custom validation to ensure salePrice < originalPrice if both are provided
  if (obj.originalPrice && obj.salePrice && obj.salePrice >= obj.originalPrice) {
    return helpers.message(`"salePrice" should be less than "originalPrice"`);
  }
  return obj;
}).min(1).messages({
  'object.min': 'At least one field must be updated',
});

const updateProductSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .optional()
    .messages({
      'string.base': `"name" should be a type of 'text'`,
      'string.empty': `"name" cannot be an empty field`,
      'string.min': `"name" should have a minimum length of {#limit}`,
      'string.max': `"name" should have a maximum length of {#limit}`,
    }),

  description: Joi.string()
    .min(2)
    .max(100)
    .optional()
    .messages({
      'string.base': `"description" should be a type of 'text'`,
      'string.min': `"description" should have a minimum length of {#limit}`,
      'string.max': `"description" should have a maximum length of {#limit}`,
    }),

  originalPrice: Joi.number()
    .precision(2)
    .positive()
    .optional()
    .messages({
      'number.base': `"originalPrice" should be a type of 'number'`,
      'number.positive': `"originalPrice" should be a positive number`,
      'number.precision': `"originalPrice" should have at most {#limit} decimal places`,
    }),

  salePrice: Joi.number()
    .precision(2)
    .positive()
    .optional()
    .messages({
      'number.base': `"salePrice" should be a type of 'number'`,
      'number.positive': `"salePrice" should be a positive number`,
      'number.precision': `"salePrice" should have at most {#limit} decimal places`,
    }),

  expirationDate: Joi.date()
    .optional()
    .messages({
      'date.base': `"expirationDate" should be a valid date`,
    }),

  quantity: Joi.number()
    .integer()
    .min(0)
    .optional()
    .messages({
      'number.base': `"quantity" should be a type of 'number'`,
      'number.integer': `"quantity" should be an integer`,
      'number.min': `"quantity" should be at least {#limit}`,
    }),

  imageUrl: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': `"imageUrl" must be a valid URI`,
    }),
}).custom((obj, helpers) => {
  // Custom validation to ensure salePrice < originalPrice if both are provided
  if (obj.originalPrice && obj.salePrice && obj.salePrice >= obj.originalPrice) {
    return helpers.message(`"salePrice" should be less than "originalPrice"`);
  }
  return obj;
})


const updateStoreSchema = Joi.object({
  storeName: Joi.string()
    .min(2)
    .max(50)
    .optional()
    .messages({
      'string.base': `"storeName" should be a type of 'text'`,
      'string.empty': `"storeName" cannot be an empty field`,
      'string.min': `"storeName" should have a minimum length of {#limit}`,
      'string.max': `"storeName" should have a maximum length of {#limit}`,
    }),

  storeAddress: Joi.string()
    .min(2)
    .max(100)
    .optional()
    .messages({
      'string.base': `"storeAddress" should be a type of 'text'`,
      'string.empty': `"storeAddress" cannot be an empty field`,
      'string.min': `"storeAddress" should have a minimum length of {#limit}`,
      'string.max': `"storeAddress" should have a maximum length of {#limit}`,
    }),

  storeDetails: Joi.string()
    .min(2)
    .max(100)
    .optional()
    .messages({
      'string.base': `"storeDetails" should be a type of 'text'`,
      'string.min': `"storeDetails" should have a minimum length of {#limit}`,
      'string.max': `"storeDetails" should have a maximum length of {#limit}`,
    }),

  profilePicture: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': `"profilePicture" must be a valid URI`,
    }),

  phoneNumber: Joi.string()
    .pattern(phoneRegex)
    .optional()
    .messages({
      'string.pattern.base': `"phoneNumber" must be a valid phone number`,
    }),

  timeOpen: Joi.string()
    .pattern(timeRegex)
    .optional()
    .messages({
      'string.base': `"timeOpen" should be a valid time in HH:mm format`,
      'string.pattern.base': `"timeOpen" should follow the HH:mm format`,
    }),

  timeClose: Joi.string()
    .pattern(timeRegex)
    .optional()
    .messages({
      'string.base': `"timeClose" should be a valid time in HH:mm format`,
      'string.pattern.base': `"timeClose" should follow the HH:mm format`,
    }),

  latitude: Joi.number()
    .min(-90)
    .max(90)
    .optional()
    .messages({
      'number.base': `"latitude" should be a valid number`,
      'number.min': `"latitude" should not be less than -90`,
      'number.max': `"latitude" should not be more than 90`,
    }),

  longitude: Joi.number()
    .min(-180)
    .max(180)
    .optional()
    .messages({
      'number.base': `"longitude" should be a valid number`,
      'number.min': `"longitude" should not be less than -180`,
      'number.max': `"longitude" should not be more than 180`,
    }),
}).custom((obj, helpers) => {
  // Custom validation to check if timeOpen < timeClose if both are provided
  if (obj.timeOpen && obj.timeClose) {
    const [openHour, openMinute] = obj.timeOpen.split(':').map(Number);
    const [closeHour, closeMinute] = obj.timeClose.split(':').map(Number);

    if (openHour > closeHour || (openHour === closeHour && openMinute >= closeMinute)) {
      return helpers.message(`"timeClose" should be after "timeOpen"`);
    }
  }
  return obj;
})



//foundation
// Schema for creating a new Foundation
const createFoundationSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(200)
    .required()
    .messages({
      'string.base': `"name" should be a type of 'text'`,
      'string.empty': `"name" cannot be an empty field`,
      'string.min': `"name" should have a minimum length of 2 characters`,
      'string.max': `"name" should have a maximum length of 200 characters`,
      'any.required': `"name" is a required field`,
    }),

  contactInfo: Joi.string()
    .max(255)
    .optional()
    .messages({
      'string.base': `"contactInfo" should be a type of 'text'`,
      'string.max': `"contactInfo" should have a maximum length of 255 characters`,
    }),

  address: Joi.string()
    .max(255)
    .optional()
    .messages({
      'string.base': `"address" should be a type of 'text'`,
      'string.max': `"address" should have a maximum length of 255 characters`,
    }),

  profilePicture: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': `"profilePicture" must be a valid URI`,
    }),
});
// Schema for updating an existing Foundation
const updateFoundationSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(200)
    .optional()
    .messages({
      'string.base': `"name" should be a type of 'text'`,
      'string.empty': `"name" cannot be an empty field`,
      'string.min': `"name" should have a minimum length of 2 characters`,
      'string.max': `"name" should have a maximum length of 200 characters`,
    }),

  contactInfo: Joi.string()
    .max(255)
    .optional()
    .messages({
      'string.base': `"contactInfo" should be a type of 'text'`,
      'string.max': `"contactInfo" should have a maximum length of 255 characters`,
    }),

  address: Joi.string()
    .max(255)
    .optional()
    .messages({
      'string.base': `"address" should be a type of 'text'`,
      'string.max': `"address" should have a maximum length of 255 characters`,
    }),

  profilePicture: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': `"profilePicture" must be a valid URI`,
    }),
})
const allowedSortByFieldsFoundation = ['id', 'name', 'contactInfo', 'address'];

// Create schema for searching Foundation
module.exports.searchFoundationSchema = Joi.object({
  id: Joi.number().integer().positive()
    .messages({
      'number.base': '"id" must be a number',
      'number.integer': '"id" must be an integer',
      'number.positive': '"id" must be a positive number',
    }),
  name: Joi.string().max(100)
    .messages({
      'string.base': '"name" must be a string',
      'string.empty': '"name" cannot be empty',
      'string.max': '"name" must be at most 100 characters long',
    }),
  contactInfo: Joi.string().max(100).optional()
    .messages({
      'string.base': '"contactInfo" must be a string',
      'string.empty': '"contactInfo" cannot be empty',
      'string.max': '"contactInfo" must be at most 100 characters long',
    }),
  address: Joi.string().max(200)
    .messages({
      'string.base': '"address" must be a string',
      'string.empty': '"address" cannot be empty',
      'string.max': '"address" must be at most 100 characters long',
    }),
  sortBy: Joi.string().valid(...allowedSortByFieldsFoundation).optional()
    .messages({
      'string.base': '"sortBy" must be a string',
      'any.only': `"sortBy" must be one of [${allowedSortByFieldsFoundation.join(', ')}]`,
    }),
  sortOrder: Joi.string().valid('asc', 'desc').optional()
    .messages({
      'string.base': '"sortOrder" must be a string',
      'any.only': '"sortOrder" must be "asc" or "desc"',
    }),
  page: Joi.number().integer().min(1).default(1)
    .messages({
      'number.base': '"page" must be a number',
      'number.integer': '"page" must be an integer',
      'number.min': '"page" must be at least 1',
    }),
  limit: Joi.number().integer().min(1).max(200)
    .messages({
      'number.base': '"limit" must be a number',
      'number.integer': '"limit" must be an integer',
      'number.min': '"limit" must be at least 1',
      'number.max': '"limit" must be at most 200',
    }),
})





//review
// Define possible rating values, e.g., 1 to 5
const ratingValues = [1, 2, 3, 4, 5];

// Schema for creating a new Review
const createReviewSchema = Joi.object({
  userId: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      'number.base': `"userId" must be a number`,
      'number.integer': `"userId" must be an integer`,
      'number.positive': `"userId" must be a positive number`,
      'any.required': `"userId" is a required field`,
    }),

  storeId: Joi.number()
    .integer()
    .positive()
    .optional()
    .messages({
      'number.base': `"storeId" must be a number`,
      'number.integer': `"storeId" must be an integer`,
      'number.positive': `"storeId" must be a positive number`,
    }),

  productId: Joi.number()
    .integer()
    .positive()
    .optional()
    .messages({
      'number.base': `"productId" must be a number`,
      'number.integer': `"productId" must be an integer`,
      'number.positive': `"productId" must be a positive number`,
    }),

  rating: Joi.number()
    .integer()
    .valid(...ratingValues)
    .required()
    .messages({
      'number.base': `"rating" must be a number`,
      'number.integer': `"rating" must be an integer`,
      'any.only': `"rating" must be one of [${ratingValues.join(', ')}]`,
      'any.required': `"rating" is a required field`,
    }),

  reviewText: Joi.string()
    .max(1000)
    .optional()
    .messages({
      'string.base': `"reviewText" should be a type of 'text'`,
      'string.max': `"reviewText" should have a maximum length of 1000 characters`,
    }),

  image: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.base': `"image" should be a type of 'text'`,
      'string.uri': `"image" must be a valid URI`,
    }),
})
  .xor('storeId', 'productId') // Ensure either storeId or productId is present, but not both
  .messages({
    'object.missing': 'Either "storeId" or "productId" must be provided',
    'object.xor': 'Only one of "storeId" or "productId" can be provided',
  });

const updateReviewSchema = Joi.object({
  userId: Joi.number()
    .integer()
    .positive()
    .optional()
    .messages({
      'number.base': `"userId" must be a number`,
      'number.integer': `"userId" must be an integer`,
      'number.positive': `"userId" must be a positive number`,
    }),

  storeId: Joi.number()
    .integer()
    .positive()
    .optional()
    .messages({
      'number.base': `"storeId" must be a number`,
      'number.integer': `"storeId" must be an integer`,
      'number.positive': `"storeId" must be a positive number`,
    }),

  productId: Joi.number()
    .integer()
    .positive()
    .optional()
    .messages({
      'number.base': `"productId" must be a number`,
      'number.integer': `"productId" must be an integer`,
      'number.positive': `"productId" must be a positive number`,
    }),

  rating: Joi.number()
    .integer()
    .valid(...ratingValues)
    .optional()
    .messages({
      'number.base': `"rating" must be a number`,
      'number.integer': `"rating" must be an integer`,
      'any.only': `"rating" must be one of [${ratingValues.join(', ')}]`,
    }),

  reviewText: Joi.string()
    .max(1000)
    .optional()
    .messages({
      'string.base': `"reviewText" should be a type of 'text'`,
      'string.max': `"reviewText" should have a maximum length of {#limit} characters`,
    }),

  image: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.base': `"image" should be a type of 'text'`,
      'string.uri': `"image" must be a valid URI`,
    }),
})
  .xor('storeId', 'productId') // Ensure either storeId or productId is present, but not both
  .min(1) // At least one field must be provided
  .messages({
    'object.missing': 'At least one field must be provided for update',
    'object.xor': 'Only one of "storeId" or "productId" can be provided',
    'object.min': 'At least one field must be provided for update',
  });






//Donation
// Define the schema for each productDonation item
const productDonationItemSchema = Joi.object({
  productId: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      'number.base': `"productId" must be a number`,
      'number.integer': `"productId" must be an integer`,
      'number.positive': `"productId" must be a positive number`,
      'any.required': `"productId" is a required field`,
    }),

  quantity: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      'number.base': `"quantity" must be a number`,
      'number.integer': `"quantity" must be an integer`,
      'number.min': `"quantity" must be at least {#limit}`,
      'any.required': `"quantity" is a required field`,
    }),
});

// Define the main schema for Donation creation
const createDonationSchema = Joi.object({
  sellerId: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      'number.base': `"sellerId" must be a number`,
      'number.integer': `"sellerId" must be an integer`,
      'number.positive': `"sellerId" must be a positive number`,
      'any.required': `"sellerId" is a required field`,
    }),

  foundationId: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      'number.base': `"foundationId" must be a number`,
      'number.integer': `"foundationId" must be an integer`,
      'number.positive': `"foundationId" must be a positive number`,
      'any.required': `"foundationId" is a required field`,
    }),

  totalPrice: Joi.number()
    .positive()
    .required()
    .messages({
      'number.base': `"totalPrice" must be a number`,
      'number.positive': `"totalPrice" must be a positive number`,
      'any.required': `"totalPrice" is a required field`,
    }),

  productDonation: Joi.array()
    .items(productDonationItemSchema)
    .min(1)
    .required()
    .messages({
      'array.base': `"productDonation" should be an array`,
      'array.min': `"productDonation" must contain at least 1 item`,
      'any.required': `"productDonation" is a required field`,
    }),
});

// Schema for updating an existing Donation
const updateDonationSchema = Joi.object({
  sellerId: Joi.number()
    .integer()
    .positive()
    .optional()
    .messages({
      'number.base': `"sellerId" must be a number`,
      'number.integer': `"sellerId" must be an integer`,
      'number.positive': `"sellerId" must be a positive number`,
    }),

  foundationId: Joi.number()
    .integer()
    .positive()
    .optional()
    .messages({
      'number.base': `"foundationId" must be a number`,
      'number.integer': `"foundationId" must be an integer`,
      'number.positive': `"foundationId" must be a positive number`,
    }),

  totalPrice: Joi.number()
    .positive()
    .optional()
    .messages({
      'number.base': `"totalPrice" must be a number`,
      'number.positive': `"totalPrice" must be a positive number`,
    }),

  productDonation: Joi.array()
    .items(productDonationItemSchema)
    .min(1)
    .optional()
    .messages({
      'array.base': `"productDonation" should be an array`,
      'array.min': `"productDonation" must contain at least 1 item`,
    }),
})
  .min(1)
  .messages({
    'object.min': 'At least one field must be provided for update',
  });

// Define fields allowed for sorting
const allowedSortByFieldsDonation = ['id', 'sellerId', 'foundationId', 'isVerify', 'totalPrice', 'donatedAt'];
// Create schema for searching Donation
module.exports.searchDonationSchema = Joi.object({
  id: Joi.number().integer().positive()
    .messages({
      'number.base': '"id" must be a number',
      'number.integer': '"id" must be an integer',
      'number.positive': '"id" must be a positive number',
    }),
  sellerId: Joi.number().integer().positive()
    .messages({
      'number.base': '"sellerId" must be a number',
      'number.integer': '"sellerId" must be an integer',
      'number.positive': '"sellerId" must be a positive number',
    }),
  foundationId: Joi.number().integer().positive()
    .messages({
      'number.base': '"foundationId" must be a number',
      'number.integer': '"foundationId" must be an integer',
      'number.positive': '"foundationId" must be a positive number',
    }),
  isVerify: Joi.boolean()
    .truthy('true')
    .falsy('false')
    .optional()
    .messages({
      'boolean.base': '"isVerify" must be a boolean (true or false)',
      'any.only': '"isVerify" must be either "true" or "false"',
    }),
  minTotalPrice: Joi.number().positive()
    .messages({
      'number.base': '"minTotalPrice" must be a number',
      'number.positive': '"minTotalPrice" must be a positive number',
    }),
  maxTotalPrice: Joi.number().positive()
    .messages({
      'number.base': '"maxTotalPrice" must be a number',
      'number.positive': '"maxTotalPrice" must be a positive number',
    }),
  startDate: Joi.date()
    .iso()
    .messages({
      'date.base': '"startDate" must be a valid date',
      'date.format': '"startDate" must be in ISO format (YYYY-MM-DD)',
    }),
  endDate: Joi.date()
    .iso()
    .messages({
      'date.base': '"endDate" must be a valid date',
      'date.format': '"endDate" must be in ISO format (YYYY-MM-DD)',
    }),
  sortBy: Joi.string().valid(...allowedSortByFieldsDonation).optional()
    .messages({
      'string.base': '"sortBy" must be a string',
      'any.only': `"sortBy" must be one of [${allowedSortByFieldsDonation.join(', ')}]`,
    }),
  sortOrder: Joi.string().valid('asc', 'desc').optional()
    .messages({
      'string.base': '"sortOrder" must be a string',
      'any.only': '"sortOrder" must be "asc" or "desc"',
    }),
  page: Joi.number().integer().min(1)
    .messages({
      'number.base': '"page" must be a number',
      'number.integer': '"page" must be an integer',
      'number.min': '"page" must be at least 1',
    }),
  limit: Joi.number().integer().min(1).max(200)
    .messages({
      'number.base': '"limit" must be a number',
      'number.integer': '"limit" must be an integer',
      'number.min': '"limit" must be at least 1',
      'number.max': '"limit" must be at most 200',
    }),
})
  .with('minTotalPrice', 'maxTotalPrice') // If minTotalPrice is provided, maxTotalPrice should also be considered
  .with('startDate', 'endDate') // If startDate is provided, endDate should also be considered
  .custom((value, helpers) => {
    // Ensure that minTotalPrice <= maxTotalPrice
    if (value.minTotalPrice && value.maxTotalPrice && value.minTotalPrice > value.maxTotalPrice) {
      return helpers.message('"minTotalPrice" cannot be greater than "maxTotalPrice"');
    }
    // Ensure that startDate <= endDate
    if (value.startDate && value.endDate && new Date(value.startDate) > new Date(value.endDate)) {
      return helpers.message('"startDate" cannot be later than "endDate"');
    }

    return value;
  });






//Cart item
// Schema for creating a new CartItem
const createCartItemSchema = Joi.object({
  userId: Joi.number().integer().positive().required()
    .messages({
      'number.base': '"userId" must be a number',
      'number.integer': '"userId" must be an integer',
      'number.positive': '"userId" must be a positive number',
      'any.required': '"userId" is a required field'
    }),
  productId: Joi.number().integer().positive().required()
    .messages({
      'number.base': '"productId" must be a number',
      'number.integer': '"productId" must be an integer',
      'number.positive': '"productId" must be a positive number',
      'any.required': '"productId" is a required field'
    }),
  quantity: Joi.number().integer().min(1).required()
    .messages({
      'number.base': '"quantity" must be a number',
      'number.integer': '"quantity" must be an integer',
      'number.min': '"quantity" must be at least 1',
      'any.required': '"quantity" is a required field'
    }),
});

// Schema for updating an existing CartItem
const updateCartItemSchema = Joi.object({

  quantity: Joi.number().integer().min(1)
    .messages({
      'number.base': '"quantity" must be a number',
      'number.integer': '"quantity" must be an integer',
      'number.min': '"quantity" must be at least 1',
    }),
});

// Define fields allowed for sorting
const allowedSortByFieldsCartItem = ['id', 'userId', 'productId', 'quantity'];

// Create schema for searching CartItem
module.exports.searchCartItemSchema = Joi.object({
  id: Joi.number().integer().positive()
    .messages({
      'number.base': '"id" must be a number',
      'number.integer': '"id" must be an integer',
      'number.positive': '"id" must be a positive number',
    }),
  userId: Joi.number().integer().positive()
    .messages({
      'number.base': '"userId" must be a number',
      'number.integer': '"userId" must be an integer',
      'number.positive': '"userId" must be a positive number',
    }),
  productId: Joi.number().integer().positive()
    .messages({
      'number.base': '"productId" must be a number',
      'number.integer': '"productId" must be an integer',
      'number.positive': '"productId" must be a positive number',
    }),
  minQuantity: Joi.number().integer().positive()
    .messages({
      'number.base': '"minQuantity" must be a number',
      'number.integer': '"minQuantity" must be an integer',
      'number.positive': '"minQuantity" must be a positive number',
    }),
  maxQuantity: Joi.number().integer().positive()
    .messages({
      'number.base': '"maxQuantity" must be a number',
      'number.integer': '"maxQuantity" must be an integer',
      'number.positive': '"maxQuantity" must be a positive number',
    }),
  sortBy: Joi.string().valid(...allowedSortByFieldsCartItem).optional()
    .messages({
      'string.base': '"sortBy" must be a string',
      'any.only': `"sortBy" must be one of [${allowedSortByFieldsCartItem.join(', ')}]`,
    }),
  sortOrder: Joi.string().valid('asc', 'desc').optional()
    .messages({
      'string.base': '"sortOrder" must be a string',
      'any.only': '"sortOrder" must be "asc" or "desc"',
    }),
  page: Joi.number().integer().min(1)
    .messages({
      'number.base': '"page" must be a number',
      'number.integer': '"page" must be an integer',
      'number.min': '"page" must be at least 1',
    }),
  limit: Joi.number().integer().min(1).max(200)
    .messages({
      'number.base': '"limit" must be a number',
      'number.integer': '"limit" must be an integer',
      'number.min': '"limit" must be at least 200',
      'number.max': '"limit" must be at most 200',
    }),
})
  .custom((value, helpers) => {
    // Ensure that minQuantity <= maxQuantity if both are provided
    if (value.minQuantity !== undefined && value.maxQuantity !== undefined) {
      if (value.minQuantity > value.maxQuantity) {
        return helpers.message('"minQuantity" cannot be greater than "maxQuantity"');
      }
    }
    return value;
  });






//Category
// Schema for creating a new Category
const createCategorySchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required()
    .messages({
      'string.base': '"name" should be a type of text',
      'string.empty': '"name" cannot be empty',
      'string.min': '"name" should have a minimum length of 100',
      'string.max': '"name" should have a maximum length of 100',
      'any.required': '"name" is a required field'
    }),
  description: Joi.string()
    .max(255)
    .optional()
    .messages({
      'string.base': '"description" should be a type of text',
      'string.empty': '"description" cannot be empty',
      'string.max': '"description" should have a maximum length of 255',
    }),
});

// Schema for updating an existing Category
const updateCategorySchema = Joi.object({

  name: Joi.string()
    .min(1)
    .max(100)
    .optional()
    .messages({
      'string.base': '"name" should be a type of text',
      'string.empty': '"name" cannot be empty',
      'string.min': '"name" should have a minimum length of 1',
      'string.max': '"name" should have a maximum length of 100',
    }),
  description: Joi.string()
    .min(1)
    .max(255)
    .messages({
      'string.base': '"description" should be a type of text',
      'string.empty': '"description" cannot be empty',
      'string.min': '"description" should have a minimum length of 255',
      'string.max': '"description" should have a maximum length of 255',
    }),
}).or('name', 'description') // At least one field must be present
  .messages({
    'object.missing': 'At least one of "name" or "description" must be provided'
  });

// for query
const allowedSortByFields = ['id', 'name', 'description'];
module.exports.searchCategorySchema = Joi.object({
  id: Joi.number().integer().positive()
    .messages({
      'number.base': '"id" must be a number',
      'number.integer': '"id" must be an integer',
      'number.positive': '"id" must be a positive number',
    }),
  name: Joi.string().min(1).max(100)
    .messages({
      'string.base': '"name" should be a type of text',
      'string.empty': '"name" cannot be empty',
      'string.min': '"name" should have a minimum length of {#limit}',
      'string.max': '"name" should have a maximum length of {#limit}',
    }),
  description: Joi.string().min(1).max(255)
    .messages({
      'string.base': '"description" should be a type of text',
      'string.empty': '"description" cannot be empty',
      'string.min': '"description" should have a minimum length of {#limit}',
      'string.max': '"description" should have a maximum length of {#limit}',
    }),
  sortBy: Joi.string().valid(...allowedSortByFields).optional()
    .messages({
      'string.base': '"sortBy" should be a type of text',
      'any.only': `"sortBy" must be one of [${allowedSortByFields.join(', ')}]`,
    }),
  sortOrder: Joi.string().valid('asc', 'desc').optional()
    .messages({
      'string.base': '"sortOrder" should be a type of text',
      'any.only': '"sortOrder" must be either "asc" or "desc"',
    }),
  page: Joi.number().integer().min(1)
    .messages({
      'number.base': '"page" must be a number',
      'number.integer': '"page" must be an integer',
      'number.min': '"page" must be at least 1',
    }),
  limit: Joi.number().integer().min(1).max(100)
    .messages({
      'number.base': '"limit" must be a number',
      'number.integer': '"limit" must be an integer',
      'number.min': '"limit" must be at least 1',
      'number.max': '"limit" must be less than or equal to 100',
    }),
})



//for allergen
// Define the validation schema for creating a new Allergen
const createAllergenSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required()
    .messages({
      'string.base': '"name" must be a string',
      'string.empty': '"name" cannot be empty',
      'string.min': '"name" must be at least 1 characters long',
      'string.max': '"name" must be at most 100 characters long',
      'any.required': '"name" is a required field',
    }),
  description: Joi.string()
    .min(0)
    .max(500)
    .optional()
    .messages({
      'string.base': '"description" must be a string',
      'string.max': '"description" must be at most 500 characters long',
    }),
});

// Define the validation schema for updating an existing Allergen
const updateAllergenSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .optional()
    .messages({
      'string.base': '"name" must be a string',
      'string.empty': '"name" cannot be empty',
      'string.min': '"name" must be at least 1 characters long',
      'string.max': '"name" must be at most 100 characters long',
    }),
  description: Joi.string()
    .min(0)
    .max(500)
    .optional()
    .messages({
      'string.base': '"description" must be a string',
      'string.max': '"description" must be at most 500 characters long',
    }),
}).or('name', 'description') // Ensure at least one field is being updated
  .messages({
    'object.missing': 'At least one of "name" or "description" must be provided for update',
  });

// Define fields allowed for sorting
const allowedSortByFieldsAllergen = ['name', 'description'];

// Create schema for searching Allergens
module.exports.searchAllergenSchema = Joi.object({
  id: Joi.number().integer().positive()
    .messages({
      'number.base': '"id" must be a number',
      'number.integer': '"id" must be an integer',
      'number.positive': '"id" must be a positive number',
    }),
  name: Joi.string().min(1).max(100).optional()
    .messages({
      'string.base': '"name" must be a string',
      'string.empty': '"name" cannot be empty',
      'string.min': '"name" must be at least {#limit} characters long',
      'string.max': '"name" must be at most {#limit} characters long',
    }),
  description: Joi.string().min(5).max(500).optional()
    .messages({
      'string.base': '"description" must be a string',
      'string.empty': '"description" cannot be empty',
      'string.min': '"description" must be at least {#limit} characters long',
      'string.max': '"description" must be at most {#limit} characters long',
    }),
  sortBy: Joi.string().valid(...allowedSortByFieldsAllergen).optional()
    .messages({
      'string.base': '"sortBy" must be a string',
      'any.only': `"sortBy" must be one of [${allowedSortByFieldsAllergen.join(', ')}]`,
    }),
  sortOrder: Joi.string().valid('asc', 'desc').optional()
    .messages({
      'string.base': '"sortOrder" must be a string',
      'any.only': '"sortOrder" must be "asc" or "desc"',
    }),
  page: Joi.number().integer().min(1).default(1)
    .messages({
      'number.base': '"page" must be a number',
      'number.integer': '"page" must be an integer',
      'number.min': '"page" must be at least {#limit}',
    }),
  limit: Joi.number().integer().min(1).max(100).default(10)
    .messages({
      'number.base': '"limit" must be a number',
      'number.integer': '"limit" must be an integer',
      'number.min': '"limit" must be at least 1',
      'number.max': '"limit" must be at most 100',
    }),
})
  .custom((value, helpers) => {
    // If sortBy is provided, ensure sortOrder is also provided, else default to 'asc'
    if (value.sortBy && !value.sortOrder) {
      value.sortOrder = 'asc';
    }
    return value;
  });



const validateSchema = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body)

  if (error) {
    console.log(req.body)
    return createError(400, error.details[0].message)
  }
  req.input = value
  next()
}

module.exports.createUserValidator = validateSchema(createUserSchema)
module.exports.updateUserValidator = validateSchema(updateUserSchema)
module.exports.loginValidator = validateSchema(loginSchema)
module.exports.createStoreValidator = validateSchema(createStoreSchema)
module.exports.updateStoreValidator = validateSchema(updateStoreSchema)
module.exports.createFoundationValidator = validateSchema(createFoundationSchema)
module.exports.updateFoundationValidator = validateSchema(updateFoundationSchema)
module.exports.createReviewValidator = validateSchema(createReviewSchema)
module.exports.updateReviewValidator = validateSchema(updateReviewSchema)
module.exports.createDonationValidator = validateSchema(createDonationSchema)
module.exports.updateDonationValidator = validateSchema(updateDonationSchema)
module.exports.createCartItemValidator = validateSchema(createCartItemSchema)
module.exports.updateCartItemValidator = validateSchema(updateCartItemSchema)
module.exports.createProductValidator = validateSchema(createProductSchema)
module.exports.updateProductValidator = validateSchema(updateProductSchema)
module.exports.createCategoryValidator = validateSchema(createCategorySchema)
module.exports.updateCategoryValidator = validateSchema(updateCategorySchema)
module.exports.createAllergenValidator = validateSchema(createAllergenSchema)
module.exports.updateAllergenValidator = validateSchema(updateAllergenSchema)


