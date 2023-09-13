const { Schema, model } = require('mongoose');

const subSchema = new Schema({
    subName: {
        type: String,
        required: 'You need a name!',
        minlength: 1,
    }
});

const Subs = model('Sub', subSchema);

module.exports = Subs;
