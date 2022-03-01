const mongoose = require("mongoose");

const OrbachSchema = new mongoose.Schema({
  occupancy: {
    type: Number,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const OrbachModel = mongoose.model("Orbach", OrbachSchema, 'Orbach');
module.exports = OrbachModel;