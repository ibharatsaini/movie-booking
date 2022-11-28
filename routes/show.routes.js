const { createShow, getShow, getByParams } = require("../controllers/show.controller")
const authenticateUser = require("../middlewares/authenticateUser")
const isAdmin = require("../middlewares/authrorizeAdmin")
const requestValidator = require("../middlewares/requestValidate")


const router = require("express").Router()



router.route("/create")
      .post(
            [
                requestValidator ,
                authenticateUser ,
                isAdmin ,
            ] ,
            createShow
      )
router.route("/:id")
      .get(
            getShow
      )

router.route("/:movie/cinema/:cinema").get(getByParams)
router.route("/all")
      .get(
            getByParams
      )

module.exports = router