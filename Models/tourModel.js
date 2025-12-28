const mongoose = require("mongoose")

const tourSchema = new mongoose.Schema({
    name: { type: String, required: [true, "this filed must be filled"], unique: true, trim: true },
    price: { type: String, required: [true, "this filed must be filled"], },
    rate: { type: String, required: [true, "this filed must be filled"], }
})
const Tour = mongoose.model("Tour", tourSchema)

module.exports = Tour