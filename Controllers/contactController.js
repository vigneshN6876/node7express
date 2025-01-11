const asyncHandler = require("express-async-handler")



const getContact =asyncHandler (async (req,res)=> {
    res.send("get all contacts")
})
const updateContact = asyncHandler(async (req,res)=> {
    res.send(`update contact ${req.params.id}`)
})
const postContact = asyncHandler(async(req,res)=> {
    console.log("the msg is" , req.body);
    const {name , email , phone} = req.body;
    if(!name || ! email || ! phone){
       res.status(400)
       throw new Error("All fields are mandatory");
    }
    res.send("create contacts")
})
const deleteContact =asyncHandler(async (req,res)=> {
    res.send(`delete contact ${req.params.id}`)
})

const getContactid =asyncHandler(async (req,res)=> {
    res.send(`get all contacts ${req.params.id}`)
})
module.exports = {getContact,updateContact,postContact,deleteContact,getContactid}