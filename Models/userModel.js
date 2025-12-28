const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    username:{
        type: String, 
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        MinKey: 6
    }
})
const User = mongoose.model("Users", usersSchema)
module.exports = User