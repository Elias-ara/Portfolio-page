const nodemailer = require("nodemailer");

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(data) {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: data.email,
      subject: `Novo contato de ${data.name} - ${data.subject}`,
      html: `
        <h2>Nova Mensagem de Contato</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Assunto:</strong> ${data.subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.error("Email service error:", error.message);
      throw error;
    }
  }
}

module.exports = new EmailService();
