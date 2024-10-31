const Joi = require('joi')
const createError = require('../utils/createError')

const Joi = require('joi');

// Define the Role enum values
const roleEnum = ['SELLER', 'BUYER', 'ADMIN'];

// Regular expression for password: At least 8 characters, one uppercase, one lowercase, one number, and one special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Regular expression for phone number (simple version, adjust as needed)
const phoneRegex = /^\+?[1-9]\d{1,14}$/;




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
    .pattern(passwordRegex)
    .required()
    .messages({
      'string.base': `"password" should be a type of 'text'`,
      'string.empty': `"password" cannot be an empty field`,
      'string.pattern.base': `"password" must be at least 8 characters long, include uppercase, lowercase, number, and special character`,
      'any.required': `"password" is a required field`,
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
    .pattern(passwordRegex)
    .optional()
    .messages({
      'string.base': `"password" should be a type of 'text'`,
      'string.empty': `"password" cannot be an empty field`,
      'string.pattern.base': `"password" must be at least 8 characters long, include uppercase, lowercase, number, and special character`,
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
  
