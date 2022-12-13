const { createBooking, getBookingByID } = require("../controllers/booking.controller")
const authenticateUser = require("../middlewares/authenticateUser")

const router = require("express").Router()


router.route("/create")
      .post( authenticateUser, createBooking)

router.route("/:id")
      .get(authenticateUser, getBookingByID)

module.exports = router