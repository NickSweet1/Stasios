const { Schema, model } = require("mongoose");

const coffeeSchema = new Schema({
  name: {
    type: String,
    required: "You need a name!",
    minlength: 1,
  },
  description: {
    type: String,
    required: "Include description for the coffee!",
  },
  price: {
    type: String,
  },
});

const Coffee = model("Coffee", coffeeSchema);

module.exports = Coffee;
