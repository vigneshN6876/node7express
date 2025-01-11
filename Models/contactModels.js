const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name : {
        type:String,
        required:[true,"please enter the name"]
    },
    email : {
        type:String,
        required:[true,"please enter the  email"]
    },
    phone : {
        type:String,
        required:[true,"please enter the phone"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Contact",contactSchema)
