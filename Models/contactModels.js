const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name : {
        type:String,
        required:[true,"please enter the name"]
    },
    enail : {
        type:String,
        required:[true,"please enter the  email"]
    },
    phone : {
        type:String,
        required:[true,"please enter the phone"]
    }
},{
    timeStamps:true
})

module.exports = mongoose.model("contact",contactSchema)