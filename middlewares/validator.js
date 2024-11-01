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
}).min(1).messages({
    'object.min': 'At least one field must be updated',
});

const createStoreSchema = Joi.object({
    storeName : Joi.string()
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
    storeAddress : Joi.string()
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
    storeDetails : Joi.string()
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
    name : Joi.string()
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
    description : Joi.string()
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
  .min(1)
  .messages({
    'object.min': 'At least one field must be updated',
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
module.exports.createProductValidator = validateSchema(createProductSchema)
module.exports.updateProductValidator = validateSchema(updateProductSchema)


