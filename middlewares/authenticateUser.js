const jwt = require("jsonwebtoken")
const catchAsyncError = require("../helpers/catchAsyncError")
const crudOperations = require("../helpers/crudOperations")
const User = require("../models/User.model")

async function authenticateUser(req,res,next){
        const token =  req.cookies?.token
        if(!token) return res.status(404).json({success:false,error:"Token not found"})
        const {_id} = jwt.verify(token,process.env.JWT_SECRET)
        const user = await crudOperations(User).getById(_id)  
        if(!user)  return res.status(404).json({success:false,error:"User not found"})
        req.user = user
        next()
}
module.exports = catchAsyncError(authenticateUser)