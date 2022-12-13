const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First Name is requied"],
        minLength:3,
        maxLength:10
    },
    lastName:{
        type:String,
        required:[true,"Last Name is requied"],
        minLength:3,
        maxLength:10
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    avatar:{type:String},
    bookings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bookings",
        select:false

    
    }],
    role:{
        type:String,
        default:"normal",
        required:[true,"Role is required"]
    },
    password:{
        type:String,
        required:[true,"Password required"],
        select:false
    }
    
})
User.pre('save',async function(next){
    console.log("user")
    if(!this.isModified("password")) return next()
    console.log(this.password)
    this.password = await bcrypt.hash(this.password,8)
    console.log(this.password)
    next()
})

User.methods.comparePassword = function(password){
        const passwordHash = this.password
        console.log(password,passwordHash)
        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,passwordHash,function(err,same){
                if(err) return reject(err)
                resolve(same)
            })
        })
}


User.methods.updatePassword = function(){
      return bcrypt.hash(this.password,8 )
}

User.methods.getJwt = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
}


module.exports = mongoose.model("users",User)