const nodemailer = require("nodemailer");
require("dotenv").config();

console.log("\n🔍 Testando configuração SMTP...");
console.log("Host:", process.env.SMTP_HOST);
console.log("Port:", process.env.SMTP_PORT);
console.log("User:", process.env.SMTP_USER);
console.log(
  "Password:",
  process.env.SMTP_PASSWORD ? "✅ Definida" : "❌ Não definida"
);
console.log("From:", process.env.SMTP_FROM_EMAIL);
console.log("To:", process.env.CONTACT_EMAIL);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Verificar conexão
console.log("\n📡 Verificando conexão com SMTP...");
transporter.verify((error, success) => {
  if (error) {
    console.error("\n❌ Erro na conexão SMTP:", error.message);
    console.error("Detalhes completos:", error);
    process.exit(1);
  } else {
    console.log("✅ Conexão SMTP OK!\n");

    // Se conectou, tentar enviar teste
    console.log("📧 Enviando email de teste...");
    transporter.sendMail(
      {
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: "🧪 TESTE DE FUNCIONAMENTO - Portfolio",
        html: "<h1>Email de teste enviado com sucesso!</h1><p>O backend está funcionando corretamente.</p>",
      },
      (err, info) => {
        if (err) {
          console.error("\n❌ Erro ao enviar email:", err.message);
          console.error("Detalhes:", err);
          process.exit(1);
        } else {
          console.log("\n✅ Email de teste enviado com sucesso!");
          console.log("Response:", info.response);
          console.log(
            "\n🎉 Tudo funcionando! Configure .env e reinicie o backend.\n"
          );
          process.exit(0);
        }
      }
    );
  }
});
