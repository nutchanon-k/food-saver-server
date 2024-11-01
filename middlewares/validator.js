const Joi = require('joi')
const createError = require('../utils/createError')


// Define the Role enum values
const roleEnum = ['SELLER', 'BUYER', 'ADMIN'];

// Regular expression for password: At least 8 characters, one uppercase, one lowercase, one number, and one special character
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Regular expression for phone number (simple version, adjust as needed)
const phoneRegex = /^\d{9,10}$/;




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
}).min(1).messages({
  'object.min': 'At least one field must be updated',
});







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
  .min(1)
  .messages({
    'object.min': 'At least one field must be updated',
  });





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
  id: Joi.number().integer().positive().required()
      .messages({
          'number.base': '"id" must be a number',
          'number.integer': '"id" must be an integer',
          'number.positive': '"id" must be a positive number',
          'any.required': '"id" is a required field'
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
  quantity: Joi.number().integer().min(1)
      .messages({
          'number.base': '"quantity" must be a number',
          'number.integer': '"quantity" must be an integer',
          'number.min': '"quantity" must be at least 1',
      }),
}).or('userId', 'productId', 'quantity') // At least one field must be present
.messages({
    'object.missing': 'At least one of "userId", "productId", or "quantity" must be provided'
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
module.exports.createFoundationValidator = validateSchema(createFoundationSchema)
module.exports.updateFoundationValidator = validateSchema(updateFoundationSchema)
module.exports.createReviewValidator = validateSchema(createReviewSchema)
module.exports.updateReviewValidator = validateSchema(updateReviewSchema)
module.exports.createDonationValidator = validateSchema(createDonationSchema)
module.exports.updateDonationValidator = validateSchema(updateDonationSchema)
module.exports.createCartItemValidator = validateSchema(createCartItemSchema)
module.exports.updateCartItemValidator = validateSchema(updateCartItemSchema)


