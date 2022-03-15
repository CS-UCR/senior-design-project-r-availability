const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    email: {
      type: String,
      required: false
    },
    photo: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: false
    },
    favroom: {
      type: String,
      required: false
    }
  });
  
  const UsersModel = mongoose.model("Users", UsersSchema, 'Users');
  module.exports = UsersModel;