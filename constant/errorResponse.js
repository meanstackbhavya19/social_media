// errors.js

const ERROR_CODES = {
  // General Errors
  INTERNAL_SERVER_ERROR: {
    code: 'GEN_500',
    statusCode: 500,
    message: 'An unexpected error occurred.',
  },
  BAD_REQUEST: {
    code: 'GEN_400',
    statusCode: 400,
    message: 'Bad request.',
  },
  UNAUTHORIZED: {
    code: 'AUTH_401',
    statusCode: 401,
    message: 'Unauthorized access.',
  },
  FORBIDDEN: {
    code: 'AUTH_403',
    statusCode: 403,
    message: 'You do not have permission to perform this action.',
  },
  NOT_FOUND: {
    code: 'GEN_404',
    statusCode: 404,
    message: 'Resource not found.',
  },

  // Auth & User Errors
  USER_ALREADY_EXISTS: {
    code: 'AUTH_001',
    statusCode: 409,
    message: 'User already exists.',
  },
  INVALID_CREDENTIALS: {
    code: 'AUTH_002',
    statusCode: 401,
    message: 'Invalid username or password.',
  },
  USER_NOT_FOUND: {
    code: 'AUTH_003',
    statusCode: 404,
    message: 'User not found.',
  },

  // Post Errors
  POST_NOT_FOUND: {
    code: 'POST_001',
    statusCode: 404,
    message: 'Post not found.',
  },
  POST_CREATION_FAILED: {
    code: 'POST_002',
    statusCode: 500,
    message: 'Failed to create post.',
  },

  // Comment Errors
  COMMENT_NOT_FOUND: {
    code: 'COMMENT_001',
    statusCode: 404,
    message: 'Comment not found.',
  },

  // Like / Reaction Errors
  ALREADY_LIKED: {
    code: 'LIKE_001',
    statusCode: 409,
    message: 'You have already liked this post.',
  },

  // Validation Errors
  VALIDATION_ERROR: {
    code: 'VALID_001',
    statusCode: 422,
    message: 'Validation failed. Please check your input.',
  },
  
    errors: {
      message: "username must be at least 3 characters or Password must contain at least one uppercase letter."
    },

    loginErrors: {
      type: "identifierRequired", 
      message: "Either email or username is required." 
   

    }
  
};

module.exports = ERROR_CODES;
