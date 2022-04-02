const mongoose = require("mongoose");

//définition d'un modèle ROLE
const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;