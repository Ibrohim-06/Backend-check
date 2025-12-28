const fs = require("fs")
const User = require("../Models/userModel")
// this is how to get the data from the file

exports.postNewUser = async (req, res) =>{
    try {
        const user = await User.create(req.body)

        res.status(200).json({
            message:"success",
            data: user
        })
    }
    catch (err){

    }
}

// exports.getAllUsersData = (req, res) =>{
//     res.status(200).json({
//         message: "success",
//         data: users
//     })
// }