const mongoose = require("mongoose");

const userFavoriteRoomSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  favroom: {
    type: String,
    required: true,
  },
});

const userFavoriteRoomModel = mongoose.model("userFavoriteRoom", userFavoriteRoomSchema, 'userFavoriteRoom');
module.exports = userFavoriteRoomModel;