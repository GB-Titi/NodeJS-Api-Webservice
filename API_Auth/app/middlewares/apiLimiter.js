const rateLimit = require('express-rate-limit');

const checkConnexion = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 15, // On limite chaque IP à 10requêtes par fenêtre, pour les 15minutes définies
    message:
    'Trop de connexions effectuées, réesayez plus tard.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
  
  const checkRegister = rateLimit({
    windowMs: 15 * 60 * 1000, // 1 hour
      max: 10, // On limite chaque IP à 10requêtes par fenêtre, pour les 15minutes définies
      message:
          'Trop de créations de compte ont été effectuées, réessayez plus tard.',
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })

  const checkRefresh = rateLimit({
    windowMs: 5 * 60 * 1000, // 5minutes
      max: 3, // On limite chaque IP à 3 requêtes par fenêtre, pour les 5minutes définies
      message:
          'Trop de tentatives de resfreshToken, réessayez plus tard.',
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })

  const apiLimiter = {
    checkConnexion,
    checkRegister,
    checkRefresh
  };

module.exports = apiLimiter;
