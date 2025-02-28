const express = require("express")
const dotenv = require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000
const errorHandler = require("./middleware/errorHandler")
const connectDb = require("./config/dbconnection")
connectDb()
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))  
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)