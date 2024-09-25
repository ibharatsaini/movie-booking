const AppError = require("../helpers/errorHandler")

module.exports = (err,req,res,next)=>{
        if(err instanceof AppError){
            res.status(err.code)
               .json({
                    status:err.code,
                    error:err.message
               })
        }else{
            console.log(err.stack)
            res.status(500)
               .json({
                    status:500,
                    error:err.message
               })
        }
}

