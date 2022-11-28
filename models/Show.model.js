const mongoose = require("mongoose")

const Show = new mongoose.Schema({
        movie:{
            type:mongoose.Schema.Types.ObjectId,
            required:[true,"Movie is required"],
            ref:"movies"
        },
        movieName:{
            type:String,
            required:[true,"Movie Name  is required"]
        },
        start:{
            type:Number,
            required:[true,"Start is required"]
        },
        end:{
            type:Number,
            requried:[true,"End is required"]
        },
        date:{type:String},
        cinema:{
            cinemaId:{type:String,required:true},
            name:{type:String,required:true},
            city:{type:String,required:true}
        },
        screen:Number,
        seatsBooked:[{type:String}],
        price:{
            silver:Number,
            golden:Number
        },
        language:{
            type:String,
            default:"hindi"
        }
})
module.exports = mongoose.model("shows",Show)