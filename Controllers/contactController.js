const asyncHandler = require("express-async-handler")

const Contact = require("../Models/contactModels")

const getContact =asyncHandler (async (req,res)=> {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})
const updateContact = asyncHandler(async (req,res)=> {
    res.send(`update contact ${req.params.id}`)
})
const postContact = asyncHandler(async (req, res) => {
    console.log("Request Body:", req.body); // Debug log

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,email,phone
    })
    res.status(201).json(contact)
});

const deleteContact =asyncHandler(async (req,res)=> {
    res.send(`delete contact ${req.params.id}`)
})

const getContactid =asyncHandler(async (req,res)=> {
    res.send(`get all contacts ${req.params.id}`)
})
module.exports = {getContact,updateContact,postContact,deleteContact,getContactid}