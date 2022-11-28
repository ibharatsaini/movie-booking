const sendToken = (user,res)=>{
      const token = user.getJwt()
      const options = {
        httpOnly:true,
        maxAge : 1000*60*6000
      }
      if(user.password) {
         user = user.toObject()
         delete user.password
      }
      return res.status(200)
         .cookie('token',token,options)
         .json({
            success:true,
            data:user
         })
}

module.exports =sendToken