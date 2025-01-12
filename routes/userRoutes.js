const express = require("express")
const router = express.Router()

router.post("/register", (req,res) => {
    res.status(200).json({messgae:"registered"})
})

router.post("/login" , (req,res) => {
    res.status.json({message : "logged in"})
})

router.post("/current",(req,res) => {
    res.status(200).json({messgae:"current user"})
})

module.exports = router