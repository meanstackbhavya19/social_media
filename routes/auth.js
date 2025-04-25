const express = require('express');
const router=express();
const authController=require('../controller/auth');
const { validateUser, loginchecker } = require('../validators/userValidator');
const signupUserHandler = async (req, res, next) => {
    try {
    //   validateSignupPayload(req.body);
      return res.json({
        success: "user signed up successfully.",
        errors:validateUser(req.body),
        result: await authController.createUser(req.body),
        
      });
    } catch (error) {
      return next(error);
    }
  };

  const loginUserHandler= 
  async(req,res,next)=>{
    try{
      return res.json({
        success:"user signed In Successfully",
        errors:loginchecker(req.body),
        result:authController.matchUser(req.body)
      });
    }
    catch(error){
      return next(error);
    }
  }

  router.post('/public/signup',signupUserHandler)
  router.post('/public/login',loginUserHandler)
  module.exports=router
  

