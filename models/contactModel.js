const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Please add the contact name'],
},
    email: {
        type: String,
        required: [true, 'Please use a valid e-mail address'], 
    },

    phone: {
        type: String,
        required: [true, 'Please use a valid phone number'], 
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);