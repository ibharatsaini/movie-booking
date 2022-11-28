const mongoose = require("mongoose")

const Booking = new mongoose.Schema({
        // user:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"users",
        // },
        totalAmount:{type:Number,required:[true,"total amout is required"]},
        booking:{
            show:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"shows",
                required:[true,"Show is required"]
            },
            seatsBooked:[{type:String,required:[true,"Booked Seats required"]}],
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        }
})
module.exports = mongoose.model("bookings",Booking)