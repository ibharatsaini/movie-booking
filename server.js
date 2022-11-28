const app = require("./app")
const database = require("./database")


const PORT  = process.env.PORT  || 8080
app.listen(PORT,()=>{
    console.log("Server listening ", PORT)
    database()
})
