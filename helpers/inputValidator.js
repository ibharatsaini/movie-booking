inputValidate= {
    isEmail:(email)=>{
        if(email.indexOf("@")===-1 || email.indexOf(".")===-1){
            return false
        }
        return true
    }
}

module.exports = inputValidate