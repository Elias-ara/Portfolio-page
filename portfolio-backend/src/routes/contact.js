const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const { validateContactForm } = require("../middleware/validation");
const { rateLimiter } = require("../middleware/rateLimiter");

router.post(
  "/send-email",
  rateLimiter,
  validateContactForm,
  contactController.sendEmail
);

module.exports = router;
