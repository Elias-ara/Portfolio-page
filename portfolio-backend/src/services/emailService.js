const { Resend } = require("resend");

class EmailService {
  constructor() {
    this.resend = null;
  }

  getResend() {
    if (!this.resend) {
      console.log("Creating Resend client...");
      console.log(
        "RESEND_API_KEY:",
        process.env.RESEND_API_KEY ? "✓ Set" : "✗ Missing"
      );
      this.resend = new Resend(process.env.RESEND_API_KEY);
    }
    return this.resend;
  }

  async sendEmail(data) {
    const emailContent = {
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "elias.ara.dev@gmail.com",
      reply_to: data.email,
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
      const resend = this.getResend();
      const result = await resend.emails.send(emailContent);
      console.log("Email sent successfully:", result);
      return result;
    } catch (error) {
      console.error("Email service error:", error.message);
      throw error;
    }
  }
}

module.exports = new EmailService();
