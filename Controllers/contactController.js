const asyncHandler = require("express-async-handler")

const Contact = require("../Models/contactModels")

const getContact =asyncHandler (async (req,res)=> {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})
const updateContact = asyncHandler(async (req, res) => {
    console.log("Received request:", req.params.id, req.body);
    // Find the contact by ID
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedContact)
});
 
const postContact = asyncHandler(async (req,res) => {
    console.log(req.body);
    const { name , email , phone } = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("all fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
 } )
    res.status(200).json(contact)
})

const deleteContact = asyncHandler(async (req,res) => {
    const { id } = req.params
    const contact = await Contact.findById(id)
    if (!contact) {
        res.status(400)
        throw new Error("contact not found")
    }
    await Contact.deleteOne({_id : id})
    res.status(200).json({message : `delete contact for ${req.params.id}`})
})
// const deleteContact = asyncHandler(async (req, res) => {
//     const { id } = req.params; // Extract ID from request parameters
//     console.log("ID:", id);

//     // Find the contact by ID
//     const contact = await Contact.findById(id);
//     if (!contact) {
//         res.status(404); // Use 404 for not found errors
//         throw new Error("Contact not found");
//     }

//     // Delete the contact
//     await Contact.deleteOne({ _id: id });

//     res.status(200).json({ message: `Deleted contact with ID: ${id}` });
// });


const getContactid =asyncHandler(async (req,res)=> {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(400)
        throw new Error("Contact no found")
    }
    res.status(201).json(contact)
})
module.exports = {getContact,updateContact,postContact,deleteContact,getContactid}