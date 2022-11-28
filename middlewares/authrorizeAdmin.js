const AppError = require("../helpers/errorHandler")

function isAdmin(req,res,next){
        console.log(req.user.role)
        if(req.user.role != "admin"){
            console.log("next inside")
            throw new AppError(400,"Not Authorized!")

        }
        console.log("next not ")
        next()

}

module.exports = isAdmin
