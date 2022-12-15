const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const cookieParser = require("cookie-parser")


dotenv.config({path:"./.env"})

const app = express()
const error = require("./middlewares/error")

const userRoutes = require("./routes/user.routes")
const movieRoutes = require("./routes/movie.routes")
const cinemaRoutes = require("./routes/cinema.routes")
const showRoutes = require("./routes/show.routes")
const bookRoutes = require("./routes/booking.router")

app.use(cors())
app.use(express.json())
app.use(cookieParser())


//routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/movie",movieRoutes)
app.use("/api/v1/cinema",cinemaRoutes)
app.use("/api/v1/show",showRoutes)
app.use("/api/v1/booking",bookRoutes)


//static
// if(process.env.NODE_ENV=='production'){
//     console.log('production running')
//     const path = require('path');

//     app.use(express.static(path.join(__dirname,"./frontend/build")))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'),function (err){
//           res.status(500).json({success:false,error:"route not resolved"})
//         })
//       });
// }


//error handling
app.use(error)

// const database = require("./database")


// const PORT  = process.env.PORT  || 8080
// app.listen(PORT,()=>{
//     console.log("Server listening ", PORT)
//     database()
// })



module.exports =app