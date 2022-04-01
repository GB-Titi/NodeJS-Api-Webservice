const mongoose = require("mongoose");

//définition d'un modèle USER
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    status: String //voir pour créer un type status qui contiens open ou close
  })
);

module.exports = User;
