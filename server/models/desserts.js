const { Schema, model } = require("mongoose");

const deserrtsSchema = new Schema({
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

const Desserts = model("Desserts", deserrtsSchema);

module.exports = Desserts;
