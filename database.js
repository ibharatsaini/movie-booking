const mongoose = require("mongoose")

const database = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(data=>console.log(`Database started at:- ${data.connection.host}`))
    .catch(e=>console.log(e))
}
module.exports = database