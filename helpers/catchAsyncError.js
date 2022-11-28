const catchAsyncError = (controller)=>(req,res,next)=>{
    return Promise.resolve(controller(req,res,next))
                  .catch(e=>next(e))
}

module.exports = catchAsyncError