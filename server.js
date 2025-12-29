const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = require("./app")

// it helps to bring from the .env file
dotenv.config({path: "./.env", silent: true })

// Database connection
const db = process.env.DATABASE // get database link from the .env
mongoose.connect(db).then(()=> console.log("DB connected successfuly!"))

// Running the server
const port = process.env.PORT || 3000
app.listen(port, '0.0.0.0', ()=>{console.log("The server is running...");})