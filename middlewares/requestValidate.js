const {validationResult } = require("express-validator")
const AppError = require("../helpers/errorHandler")

function requestValidator(req,res,next){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw new AppError(404,errors.array()[0].msg)
    }
    next()
}
module.exports = requestValidator