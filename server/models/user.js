const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: 'You need a name!',
        minlength: 1,
    },
    pin: {
        type: Number,
        required: 'Please assign a pin to the user.'
    }
});

const User = model('User', userSchema);

module.exports = User;