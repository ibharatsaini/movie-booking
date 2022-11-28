const { createCinema, getCinema, getParamsCinema } = require("../controllers/cinema.controller")
const authenticateUser = require("../middlewares/authenticateUser")
const requestValidator = require("../middlewares/requestValidate")
const isAdmin = require("../middlewares/authrorizeAdmin")
const router = require("express").Router()


router.route("/create")
      .post(
            [
                requestValidator,
                authenticateUser,
                isAdmin
            ],
            createCinema
      )
router.route("/city/:city").get(getParamsCinema)
router.route("/all")
      .get(getCinema)



module.exports = router