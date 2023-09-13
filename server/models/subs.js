const { Schema, model } = require('mongoose');

const subSchema = new Schema({
    subName: {
        type: String,
        required: 'You need a name!',
        minlength: 1,
    },
    ingredients: [
        {
            type: String,
            required: 'Include ingredients for the sub!'
        },
    ],
});

const Subs = model('Sub', subSchema);

module.exports = Subs;
