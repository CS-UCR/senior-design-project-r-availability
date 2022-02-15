const mongoose = require("mongoose");

const TTPSchema = new mongoose.Schema({
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

const TTPModel = mongoose.model("TTP", TTPSchema, 'TTP');
module.exports = TTPModel;