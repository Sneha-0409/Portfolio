const mongoose = require('mongoose');

// Define the schema for the contact form submissions
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // This field is mandatory
        trim: true,
    },
    email: {
        type: String,
        required: true, // This field is mandatory
        trim: true,
    },
    message: {
        type: String,
        required: true, // This field is mandatory
    },
    // The timestamp is automatically generated when a document is created [cite: 32]
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Contact', ContactSchema);