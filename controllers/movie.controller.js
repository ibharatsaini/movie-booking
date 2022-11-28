const Movie = require("../models/Movie.model")
const catchAsyncError = require("../helpers/catchAsyncError")
const crudOperations = require("../helpers/crudOperations")

const createMovie =async(req,res)=>{
      console.log(req.body)
      const movies=[]
      req.body.movies.forEach(async element => {
            const movie = await crudOperations(Movie).createOne({...element,createdBy:req.user._id})
            movies.push(movie)
      });
        
        if(movies.length<1) return  res.status(404)
                              .json({
                                success:false,
                                error:"Movie Wasn't Created"
                              })
        console.log("message got passed")
        console.log(movie)
        return res.status(200)
                  .json({
                        success:true,
                        data: movies
                  })
}

const getKeywordMovie = async(req,res)=>{
      console.log(req.query)
      const movies = await crudOperations(Movie).getAll({name:{$regex:req.query.keyword,$options:"i"}},['name','genre'])
      if(!movies) return res.status(404).json({
                        success:false,
                        error:"No movies found"
      })
      return res.status(200).json({
            success:true,
            data:movies
      })
}

const getMovieByParams = async(req,res)=>{
      const movies = await crudOperations(Movie).getAll({...req.query})
      if(!movies) return res.status(404)
                            .json({
                              success:false,
                              error:"Movie wasn't deleted"
                            })
      return res.status(200)
                .json({
                  success:true,
                  data:movies
                })
}



const deleteMovie = async(req,res)=>{
        const movie = await crudOperations(Movie).deleteById(req.body.id)
        if(!movie) return res.status(404)
                             .json({
                                      success:false,
                                      error:"Movie wasn't deleted"
                             })
        return res.status(200)
                  .json({
                        success:true,
                        message:"Movie successfully Deleted"
                  })
}


const getAllMovie = async(req,res)=>{
      const movies=  await crudOperations(Movie).getAll()
      
      if(!movies) return res.status(404)
                            .json({
                                    success:false,
                                    error:"No Movie Found"
                             })
      
      return res.status(200)
                .json({
                        success:true,
                        data:movies
                })
}

const getMovieById = async(req,res)=>{
      const movie = await crudOperations(Movie).getById(req.params.id)
      if(!movie) return res.status(404).json({
            success:false,
            error:"Movie Not Found!"
      })
      return res.status(200).json({
            success:true,
            data:movie
      })
}



module.exports = {
          createMovie  :  catchAsyncError(createMovie),
          deleteMovie  :  catchAsyncError(deleteMovie),
          getAllMovie  :  catchAsyncError(getAllMovie),
          getMovieById :  catchAsyncError(getMovieById),
          getMovieByParams:catchAsyncError(getMovieByParams),
          getKeywordMovie: catchAsyncError(getKeywordMovie)
}