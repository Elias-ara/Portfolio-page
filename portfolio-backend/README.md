# 🚀 Portfolio Backend

Backend robusto para gerenciar envios de email via formulário de contato.

![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)

---

## 📋 Características

- ✅ Validação de formulário (server-side)
- ✅ Rate limiting (5 emails/15 minutos)
- ✅ CORS configurável
- ✅ Email via Nodemailer + Gmail SMTP
- ✅ Logs detalhados
- ✅ Error handling robusto
- ✅ Health check endpoint

---

## 🛠️ Instalação

```bash
cd portfolio-backend
npm install
```

---

## ⚙️ Configuração

Crie arquivo `.env`:

```properties
PORT=3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu_email@gmail.com
SMTP_PASSWORD=sua_senha_app
SMTP_FROM_EMAIL=seu_email@gmail.com
CONTACT_EMAIL=seu_email@gmail.com
CORS_ORIGIN=http://localhost:4200
```

---

## 🚀 Uso

### Desenvolvimento

```bash
npm start
```

Servidor em `http://localhost:3000`

### Teste SMTP

```bash
node test-smtp.js
```

---

## 📡 API

### POST `/api/contact/send-email`

**Body:**

```json
{
  "name": "João",
  "email": "joao@example.com",
  "subject": "Assunto do email",
  "message": "Mensagem com mais de 10 caracteres"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "Email enviado com sucesso!"
}
```

**Error (400/429/500):**

```json
{
  "error": "Descrição do erro"
}
```

### GET `/health`

Verifica se o servidor está rodando.

**Response (200):**

```json
{
  "status": "OK"
}
```

---

## 📦 Dependências

- **express** - Framework web
- **cors** - CORS middleware
- **body-parser** - JSON parser
- **dotenv** - Variáveis de ambiente
- **nodemailer** - Email via SMTP
- **express-rate-limit** - Rate limiting

---

## 📁 Estrutura

```
src/
├── app.js                 # Configuração Express
├── routes/
│   └── contact.js         # Rotas
├── controllers/
│   └── contactController.js
├── services/
│   └── emailService.js    # Email
├── middleware/
│   ├── validation.js      # Validação
│   ├── rateLimiter.js     # Rate limit
│   └── errorHandler.js    # Erro
└── config/
    └── emailConfig.js
```

---

## 🚀 Deploy

### Render

```
Build: npm install
Start: npm start
```

Adicione variáveis de ambiente no dashboard.

---

## 🆘 Troubleshooting

### "Invalid login" error

1. Ative 2FA em https://myaccount.google.com/security
2. Gere senha de app em https://myaccount.google.com/apppasswords
3. Copie SEM ESPAÇOS em SMTP_PASSWORD

### Rate limit atingido

Aguarde 15 minutos ou mude `max` em `middleware/rateLimiter.js`

---

**Versão**: 1.0.0
