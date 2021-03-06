const { verifySignUp, authJwt, apiLimiter } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/account",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
      authJwt.verifyToken,
      authJwt.isAdmin,
      apiLimiter.checkRegister
    ],
    controller.signup
  );
  app.post("/api/auth/refreshToken", apiLimiter.checkRefresh, controller.refreshToken);
  app.post("/api/token", controller.signin);
};
