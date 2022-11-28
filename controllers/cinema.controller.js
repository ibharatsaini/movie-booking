const catchAsyncError = require("../helpers/catchAsyncError")
const crudOperations = require("../helpers/crudOperations")
const Cinema = require("../models/Cinema.model")


const createCinema = async(req,res)=>{
    const cinemas=[]
    req.body.cinemas.forEach(async element=>{
        const cinema = await crudOperations(Cinema).createOne(element)
        cinemas.push(cinema)
    })
    // const cinema = await crudOperations(Cinema).createOne(req.body)
    if(!cinemas) return res.status(404)
                          .json({
                                success:false,
                                error: "Cinema not created"
                          })
    return res.status(200)
               .json({
                    success:true,
                    data:cinemas
               })
}

const getCinema = async(req,res)=>{
    const cinemas = await crudOperations(Cinema).getById(req.body.id)
    if(!cinemas) return res.status(404).json({success:false, error:"Cinema not found"})
    return res.status(200).json({
        success:true,
        data:cinemas
    })
}

const getParamsCinema = async(req,res)=>{
    const cinemas = await crudOperations(Cinema).getAll({city:req.params.city})
    if(!cinemas) return res.status(404).json({success:false,error:"Cinemas not found"})
    return res.status(200).json({success:true,data:cinemas})
}

const allCinema = async(req,res)=>{
    const cinemas = await crudOperations(Cinema).getAll()
    if(cinemas) return res.status(404).json({success:false,error:"No Cinemas Found"})
    return res.status(200).json({
            success:true,
            data: cinemas
    })
}


module.exports = {
    createCinema : catchAsyncError(createCinema),
    getCinema    : catchAsyncError(getCinema),
    allCinema    : catchAsyncError(allCinema),
    getParamsCinema : catchAsyncError(getParamsCinema)
}