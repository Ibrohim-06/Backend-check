const express = require("express")

// first step is creating express router
const router = express.Router()

// this is the function
const {getAllUsersData, postNewUser} = require("../controllers/userController")

// router.route("/").get(getAllUsersData)
router.route("/").post(postNewUser)
// router.route("/:id").put()
// router.route("/:id").delete()

module.exports = router