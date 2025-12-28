const express = require("express")
const router = express.Router()
const {getAllToursData, postNewTourData, getTourById, editTourData, deleteTourById} = require("../controllers/tourController")


router.route("/").get(getAllToursData)
router.route("/").post(postNewTourData)
router.route("/:id").get(getTourById)
router.route("/:id").put(editTourData)
router.route("/:id").delete(deleteTourById)

module.exports = router