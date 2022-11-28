const { createBooking } = require("../controllers/booking.controller")

const router = require("express").Router()


router.route("/create")
      .post(createBooking)



module.exports = router