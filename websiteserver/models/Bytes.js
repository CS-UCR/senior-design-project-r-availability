const mongoose = require("mongoose");

const BytesSchema = new mongoose.Schema({
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

const BytesModel = mongoose.model("Bytes", BytesSchema, 'Bytes');
module.exports = BytesModel;