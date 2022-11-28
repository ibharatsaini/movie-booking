const User = require("../models/User.model")
const crudOperations = require("../helpers/crudOperations")
const inputValidate = require("../helpers/inputValidator")
const AppError = require("../helpers/errorHandler")
const catchAsyncError = require("../helpers/catchAsyncError")
const sendToken = require("../helpers/sendToken")



const registerUser = async(req,res,next)=>{
    console.log(req.body)
        if(!inputValidate.isEmail(req.body.email)){
            throw new AppError(404,"Invalid Email")
        }
        if(req.body.password !== req.body.confirmPassword){
            throw new AppError(404,"Passworod Do Not Match")
        }
    console.log(req.body)

        const user = await crudOperations(User).createOne({
            firstName:req.body.firstName,
            lastName: req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            role: req.body?.role
        })
    console.log(req.body)

        if(!user) return res.status(404).json({success:false,error:"User Couldn't be created"})
        console.log(user)
        sendToken(user,res)
 }

const login = async(req,res)=>{
    const inputs = {
        email: req.body.email,
        password : req.body.password
    }
    console.log(inputs)
    
    const user = await crudOperations(User).getOne({email:inputs.email},['+password'])
    console.log(user)
    if(!user) return res.status(404).json({success:false,error:"User not found"})
    const password = await user.comparePassword(inputs.password)
    console.log(password)
    if(!password){
        return res.status(404).json({success: false,error:"Incorrect Password"}) 
    }
    else{
        console.log("else log")
        sendToken(user,res) }
}

const updateUser = async(req,res)=>{
        delete req.body?.password
        const user = await crudOperations(User).updateById(req.body._id,req.body)
        if(!user) return res.status(404)
                            .json({success:false,error:"User Cannot be updated"})
        res.status(200)
           .json({
                success:true,
                data:user
           })
}

const getUser = async(req,res)=>{
    console.log(req.user)
    const user =await crudOperations(User).getById(req.user._id)
    console.log("user")
    console.log(user)
    if(!user) return res.status(404).json({success:false,error:"User not found"})
    return res.status(200)
              .json({
                    success:true,
                    data:user
              })
}

module.exports = {
    registerUser    : catchAsyncError(registerUser),
    updateUser      :   catchAsyncError(updateUser),
    getUser         :      catchAsyncError(getUser),
    login           :        catchAsyncError(login)
}