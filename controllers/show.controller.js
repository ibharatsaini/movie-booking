const catchAsyncError = require("../helpers/catchAsyncError")
const crudOperations = require("../helpers/crudOperations")
const CinemaModel = require("../models/Cinema.model")
const MovieModel = require("../models/Movie.model")
const Shows = require("../models/Show.model")

const createShow = async(req,res)=>{
    console.log("show controller")
    console.log(req.body.movies)
    // const updateMovie =  await crudOperations(Shows).getOne({movie:req.body.movie , start:req.body.start , end:req.body.end , language:req.body.language})
    // const updateMovie = await crudOperations(Shows).getOne({movie: req.body.movie})
    // console.log(updateMovie)
    // if(updateMovie){
        const shows=[]
        // console.log(req.body.cinema)
        req.body.movies.forEach(async element => {
                const movie = await crudOperations(MovieModel).getById(element.movie)
                console.log(movie)
                element.movieName = movie.name
                if(movie) {
                const show = await crudOperations(Shows).createOne(element)
        // await updateMovie.save()
                shows.push(show)
                }
        // return res.status(200).json({success:true,data:updateMovie})
    })
    
    if(!shows) return res.status(400)
                        .json({
                                success:false,
                                error:"Show couldn't listed"
                        })
    return res.status(200)
              .json({
                    success:true,
                    data: shows
              })
}

const getShow = async(req,res)=>{
    console.log('dd')
    const show = await crudOperations(Shows).getById(req.params.id)
    if(!show) return res.status(404)
                        .json({
                                success:false,
                                error:"Show not available"
                        })
    return res.status(200)
              .json({
                    success:true,
                    data: show
              })
}

const getByParams = async(req,res)=>{
    console.log('prams')
    console.log(req.params)
    const shows = await crudOperations(Shows).getAll({
        "movie":req.params.movie,
        "language":req.query.language,
        "date":req.query.date,
        "start":req.query.time,
        "cinema.cinemaId":req.params.cinema
    })
    const movie =await crudOperations(MovieModel).getById(req.params.movie)
    console.log(shows)
    if(!shows) return res.status(404)
                         .json({
                                success:false,
                                error: "Shows Not Found"
                         })
    return res.status(200).json({
                success:true,
                data:{shows,movie}
    })
}


module.exports = {
    createShow :  catchAsyncError(createShow),
    getShow    :  catchAsyncError(getShow),
    getByParams:  catchAsyncError(getByParams)
}