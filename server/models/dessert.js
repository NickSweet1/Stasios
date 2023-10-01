const { Schema, model } = require("mongoose");

const deserrtSchema = new Schema({
  name: {
    type: String,
    required: "You need a name!",
    minlength: 1,
  },
  description: {
    type: String,
    required: "Include description for the dessert!",
  },
  price: {
    type: String,
  },
});

const Dessert = model("Dessert", deserrtSchema);

module.exports = Dessert;
