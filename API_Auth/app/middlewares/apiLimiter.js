const rateLimit = require('express-rate-limit');

const checkConnexion = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // On limite chaque IP à 10requêtes par fenêtre, pour les 15minutes définies
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
  
  const checkRegister = rateLimit({
    windowMs: 15 * 60 * 1000, // 1 hour
      max: 10, // On limite chaque IP à 10requêtes par fenêtre, pour les 15minutes définies
      message:
          'Too many accounts created from this IP, please try again after an hour',
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })

  const apiLimiter = {
    checkConnexion,
    checkRegister
  };

module.exports = apiLimiter;
