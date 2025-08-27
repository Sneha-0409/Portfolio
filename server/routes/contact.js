const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Receive and store a contact form submission
router.post('/', async(req, res) => {
    const { name, email, message } = req.body;

    // Server-side validation to ensure required fields are present [cite: 30]
    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields.' });
    }

    try {
        // Create a new contact instance based on the Mongoose model
        const newContact = new Contact({
            name,
            email,
            message,
        });

        // Save the new contact submission to the database
        const contact = await newContact.save();

        // Respond with success message and the saved data
        res.status(201).json({ msg: 'Message submitted successfully!', contact });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;