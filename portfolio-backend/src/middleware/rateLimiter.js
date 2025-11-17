const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Muitas requisições. Tente novamente em 15 minutos.",
  handler: (req, res) => {
    res
      .status(429)
      .json({ error: "Muitas requisições. Tente novamente em 15 minutos." });
  },
  skip: (req) => false,
});

module.exports = { rateLimiter };
