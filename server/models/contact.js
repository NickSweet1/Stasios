const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        minlength: 1,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxlength: 255,
        minlength: 1,
        required: true
    }
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;
