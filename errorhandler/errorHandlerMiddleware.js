
// const {ERROR_CODES}=require('./constant/errorResponse.js')

const { isError } = require("lodash");
const ERROR_CODES = require("../constant/errorResponse");
const { validateUser, loginchecker } = require("../validators/userValidator");

// middleware/errorHandler.js
function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
    if (process.env.NODE_ENV === 'development') {
      return res.status(statusCode).json({
        message,
        message: err.message,
        error: err,
        stack: err.stack
      });
    }

    if(loginchecker==true){
        res.send({
            isError:true,
            message
        })
    }

    if(validateUser==true){
        res.send({
            isError:true,
            message

        })
    }
  
    // 
     res.status(statusCode)
     res.send({
        isError:true,
        message

     })



  }
  
  module.exports = {errorHandler};
  