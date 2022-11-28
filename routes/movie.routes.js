const { createMovie, deleteMovie ,getAllMovie, getMovieById, getMovieByParams, getKeywordMovie} = require("../controllers/movie.controller")
const authenticateUser = require("../middlewares/authenticateUser")
const isAdmin = require("../middlewares/authrorizeAdmin")
const requestValidator = require("../middlewares/requestValidate")

const router = require("express").Router()


router.route("/create")
      .post(
                
                    requestValidator ,
                    authenticateUser,
                    isAdmin
                ,
                createMovie
      )

router.route("/all")
      .get(getAllMovie)
router.route("/search")
      .get(getKeywordMovie)

router.route("/filter")
      .get(getMovieByParams)
router.route("/:id")
      .get(getMovieById)
      .delete(
                [
                    requestValidator,
                    authenticateUser,
                    isAdmin
                ],
                deleteMovie
      )


module.exports = router