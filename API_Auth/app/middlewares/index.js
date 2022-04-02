const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const apiLimiter = require("./apiLimiter");

//on exporte les middlewares
module.exports = {
  authJwt,
  verifySignUp, 
  apiLimiter
};
