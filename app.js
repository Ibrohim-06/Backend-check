const express = require("express")
const app = express()
const morgan = require("morgan")
const fs = require("fs")

// Routers
const tourRoutes = require("./routes/tourRoutes")
const userRoutes = require("./routes/userRoutes")

// using the morgan middleware
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
} // this should work only development environment

// Middleware && do not forget to use next() in middlewares
app.use(express.json()) //this helps to read json files
app.use((req, res, next)=>{
    console.log("Middlware is working")
     next()
})
app.use("/tours", tourRoutes) 
app.use("/users", userRoutes)

module.exports = app