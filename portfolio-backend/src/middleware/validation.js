const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || name.length < 3) {
    return res.status(400).json({ error: "Nome inválido" });
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Email inválido" });
  }

  if (!subject || subject.length < 5) {
    return res.status(400).json({ error: "Assunto muito curto" });
  }

  if (!message || message.length < 10) {
    return res.status(400).json({ error: "Mensagem muito curta" });
  }

  next();
};

module.exports = { validateContactForm };
