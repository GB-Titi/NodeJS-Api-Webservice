const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Contenu public.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("Contenu utilisateur.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Contenu admin");
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Contenu modérateur.");
  };

  exports.searchUser = async (req, res) => {
    let data = {}
        data = await User.find({
          _id: req.params.id
        })
    if(Object.entries(data).length === 0){
      console.log("Pas utilisateur trouvé")
      res.status(404).send("Aucun utilisateur trouvé pour l'uid")
    }else{
      res.send(data);
    }
  }