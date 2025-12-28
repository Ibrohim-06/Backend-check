const fs = require("fs")
const Tour = require("../Models/tourModel")


exports.postNewTourData = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body)

    res.status(201).json({
      status: "success",
      data: newTour
    })
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        status: "fail",
        message: "Tour name already exists"
      })
    }
    res.status(400).json({
      status: "fail",
      message: err.message
    })
  }
}
exports.getAllToursData = async (req, res) => {
    const tour = await Tour.find()
    res.status(200).json({
        message: "success",
        data: tour
    })
}
exports.editTourData = async (req, res) => {
    const editData = await Tour.findByIdAndUpdate(req.params.id, req.body,{new:true})
    try {
        res.status(200).json({
            status: "success",
            data: editData
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
}
exports.getTourById = async (req, res) => {
    const tour = await Tour.findById(req.params.id)
    res.status(200).json({
        message: 'success',
        data: tour
    })
}
exports.deleteTourById = async (req, res) => {
    try {
        const deleted = await Tour.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success",
            data: deleted
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};