const mongoose = require("mongoose")

const Cinema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,"Cinema name is required"],
            minLength: 5,
            maxLength: 50
        },
        state:{ 
            type:String,
            required:[true,"State is required"]
        },
        city:{
            type:String,
            required:[true,"City is required"]
        },
        shows:[{
            showId : String,
            start  : String,
            end    : String,
        }],
        totalSeats:{
            type:Number,
            required:[true,"Total Seats required"]
        },
        silverSeats:{
            type:Number,
            required:[true,"Silver is required"]
        },
        goldenSeats:{
            type:Number,
            required:[true,"Golden is required"]
        }
} , { timestamps : true } )

module.exports  =  mongoose.model("cinemas",Cinema)

