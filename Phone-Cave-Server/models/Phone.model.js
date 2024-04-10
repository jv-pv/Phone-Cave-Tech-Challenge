const { model, Schema } = require("mongoose");

const phoneSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: String
});

module.exports = model("Phone", phoneSchema)