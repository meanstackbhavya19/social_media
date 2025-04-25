const Validator = require("fastest-validator");
const ERROR_CODES = require("../constant/errorResponse");
const v = new Validator();

// User registration
const userSchema = {
  name: { type: "string", min: 3, max: 30, pattern: "^[a-zA-Z0-9_]+$" },
  email: { type: "email" },
  password: {
    type: "string", min: 8,
    custom(value, errors) {
      if (!/[A-Z]/.test(value)) throw ERROR_CODES.errors
      if (!/[0-9]/.test(value)) throw ERROR_CODES.errors
      if (!/[a-z]/.test(value)) throw ERROR_CODES.errors
      return value;
    }
  }
};

// Post creation
const postSchema = {
  text: { type: "string", min: 1, max: 500 },
  imageUrl: { type: "string", optional: true, empty: true, pattern: "^https?:\/\/.*\.(jpg|jpeg|png|gif)$" }
};

// Comment
const commentSchema = {
  text: { type: "string", min: 1, max: 300 }
};

const loginSchema = {
    email: { type: "email", optional: true, empty:false },
    password: { type: "string", min: 6 },
  
    // Custom validation for "either email or username must be provided"
    // $$root: true,
    // custom(value, errors) {
    //   if (!value.email && !value.username) {
    //     throw ERROR_CODES.loginErrors
    //   }
    //   return value;
    // }

    
  };

  loginchecker = (data) => {
    const result = validateLogin(data);
  
    if (result === true) {
      // Manual check: require either email or username
      if (!data.email && !data.username) {
       throw ERROR_CODES.loginErrors
      }
      return true;
    }
  
    // return result;
  };



// Compiled validators (super fast)
module.exports = {
  validateUser: v.compile(userSchema),
  validatePost: v.compile(postSchema),
  validateComment: v.compile(commentSchema),
  loginchecker: v.compile(loginSchema)
};
