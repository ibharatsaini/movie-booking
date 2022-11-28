const userController = require("../controllers/user.controller")
const authenticateUser = require("../middlewares/authenticateUser")
const requestValidator = require("../middlewares/requestValidate")
const router = require("express").Router()

router.route("/create")
      .post(userController.registerUser)

router.route("/login")
      .post(userController.login)


router.route("/update")
      .post(
             [authenticateUser],
             userController.updateUser
            )

router.route("/me")
      .get(
            [
                requestValidator , 
                authenticateUser
            ],
            userController.getUser
           )



module.exports = router