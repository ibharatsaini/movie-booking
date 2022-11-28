const catchAsyncError = require("../helpers/catchAsyncError")
const crudOperations = require("../helpers/crudOperations")
const Booking = require("../models/Booking.model")
const ShowModel = require("../models/Show.model")


const createBooking = async(req,res,next)=>{
    console.log(req.body)
    const show = await crudOperations(ShowModel).getById(req.body.booking.show)
    console.log(show)
    if(!show) return res.status(404).json({success:false,error:"Show wasn't found"})
    const booking = await crudOperations(Booking).createOne({...req.body,booking:{...req.body.booking,show:show._id}})
    console.log(booking)
    if(!booking) return res.status(404).json({success:false,error:"Couldn't create the booking"})
    return res.status(200)
              .json({
                    success:true,
                    data:booking
              })
}



const deleteBooking = async(req,res)=>{
    const booking = await crudOperations(Booking).deleteById(req.body.id)
    if(!booking) return res.status(404).json({success:false,error:"Couldn't delete Booking"})
    return res.status(200)
              .json({
                    success:true,
                    data:booking,
                    message:"Booking Deleted"
              })
}

const getBookingById = async(req,res)=>{
    const booking = await crudOperations(Booking).getById(req.params.id)
    if(!booking) return res.status(404).json({success:false,error:"Couldn't get Booking"})
    return res.status(200)
              .json({
                    success:true,
                    data: booking
              })
}

const getAllBooking = async(req,res)=>{
    const booking = await crudOperations(Booking).getAll({createdBy:req.user._id})
    if(!booking) return res.status(404).json({success:false,error:"User has no Bookings"})
    return res.status(200)
              .json({
                    success : true,
                    data    : booking,
                    message : "Bookings Found"
              })
}

module.exports = {
    createBooking  : catchAsyncError(createBooking),
    getAllBooking  : catchAsyncError(getAllBooking),
    getBookingByID : catchAsyncError(getBookingById),
    deleteBooking  : catchAsyncError(deleteBooking)

}