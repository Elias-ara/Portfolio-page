const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:4200",
  "http://localhost:3000",
  "https://elias-ara.github.io",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(bodyParser.json());

// Middleware para processar requisições
app.use((req, res, next) => {
  next();
});

// Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("🔴 [ERROR HANDLER]", err);
  res.status(500).json({ error: "Erro interno do servidor" });
});

module.exports = app;
