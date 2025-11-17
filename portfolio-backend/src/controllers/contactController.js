const emailService = require("../services/emailService");

exports.sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await emailService.sendEmail({ name, email, subject, message });

    res.json({
      success: true,
      message: "Email enviado com sucesso!",
    });
  } catch (error) {
    console.error("Email send error:", error.message);
    res.status(500).json({
      success: false,
      error: "Falha ao enviar email. Tente novamente mais tarde.",
    });
  }
};
