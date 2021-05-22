const { Schema, model } = require("mongoose");

const businessSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = model("Business", businessSchema);
