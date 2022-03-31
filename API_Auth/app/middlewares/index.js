const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

//on exporte les middlewares
module.exports = {
  authJwt,
  verifySignUp
};
