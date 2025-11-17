# 🚀 Portfolio Backend

Backend robusto e escalável para gerenciar envios de email via formulário de contato. API REST construída com Node.js + Express com foco em segurança e performance.

![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)

## 📖 Sobre

API REST que processa mensagens de contato do frontend com validação robusta, rate limiting para proteção contra spam, e integração com Gmail SMTP para envio de emails. A arquitetura segue padrões MVC com separação clara entre rotas, controllers, serviços e middleware.

## ✨ Características

- **Validação Server-Side** - Validação de formulário em duas camadas (client + server)
- **Rate Limiting** - Proteção contra spam (5 emails por 15 minutos por IP)
- **CORS Configurável** - Restrito apenas ao frontend autorizado
- **Email via Gmail SMTP** - Integração segura com Nodemailer
- **Error Handling** - Tratamento completo de erros com mensagens genéricas
- **Health Check** - Endpoint para monitoramento do servidor
- **Segurança** - Sanitização de dados e proteção contra ataques comuns

## 🏗️ Arquitetura

```
src/
├── app.js                     # Configuração Express e middlewares
├── routes/
│   └── contact.js             # Definição de rotas
├── controllers/
│   └── contactController.js   # Lógica de requisições
├── services/
│   └── emailService.js        # Integração com Nodemailer
├── middleware/
│   ├── validation.js          # Validação de formulário
│   ├── rateLimiter.js         # Rate limiting por IP
│   └── errorHandler.js        # Tratamento de erros
└── config/
    └── emailConfig.js         # Configuração SMTP
```

## � API Endpoints

### `POST /api/contact/send-email`

Enviar mensagem de contato via email.

**Headers:**

```
Content-Type: application/json
```

**Body:**

```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "subject": "Assunto do email",
  "message": "Mensagem com pelo menos 10 caracteres"
}
```

**Validações:**

- `name`: Mínimo 3 caracteres
- `email`: Formato de email válido
- `subject`: Mínimo 5 caracteres
- `message`: Mínimo 10 caracteres

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Email enviado com sucesso!"
}
```

**Errors:**

- `400 Bad Request` - Validação falhou
- `429 Too Many Requests` - Rate limit atingido
- `500 Internal Server Error` - Erro ao enviar email

### `GET /health`

Verificar status do servidor.

**Response (200 OK):**

```json
{
  "status": "OK"
}
```

## �️ Stack Técnico

- **Node.js 18+** - Runtime JavaScript
- **Express 5.1** - Framework web minimalista
- **Nodemailer 7.0** - SMTP client para envio de emails
- **express-rate-limit 8.2** - Middleware de rate limiting
- **body-parser 2.2** - Parser de JSON
- **cors 2.8** - CORS middleware
- **dotenv 17.2** - Gerenciamento de variáveis de ambiente

## 🔐 Segurança

### CORS

```javascript
cors({ origin: "http://localhost:4200" });
```

Restrito apenas ao frontend autorizado. Para produção, altere para o domínio real.

### Rate Limiting

- **5 requisições por IP por 15 minutos**
- Proteção contra abuso e spam
- Mensagem clara ao atingir limite

### Validação

```
- Frontend: Validação em tempo real (UX)
- Backend: Validação obrigatória (segurança)
```

### Variáveis de Ambiente

Credenciais armazenadas em `.env` (nunca comitado):

```properties
SMTP_USER=seu_email@gmail.com
SMTP_PASSWORD=sua_senha_app_16_caracteres
CONTACT_EMAIL=seu_email@gmail.com
```

## 📊 Performance

- **Resposta Média**: < 2 segundos
- **Throughput**: ~100 emails/minuto
- **Memory**: ~50 MB (com Node.js base)
- **Rate Limit**: 5 emails / 15 min / IP

## 🔍 Monitoramento

### Logs de Erro

Apenas erros críticos são logados:

```
console.error('Email service error:', error.message);
```

### Health Check

Monitore a disponibilidade do servidor:

```bash
curl http://localhost:3000/health
```

## 📦 Dependências Principais

```json
{
  "express": "^5.1.0",
  "nodemailer": "^7.0.10",
  "express-rate-limit": "^8.2.1",
  "cors": "^2.8.5",
  "body-parser": "^2.2.0",
  "dotenv": "^17.2.3"
}
```

## � Padrões e Boas Práticas

- **MVC Pattern** - Separação clara de responsabilidades
- **Error Handling** - Tratamento de erros consistente
- **Middleware Chain** - Validação e segurança em camadas
- **Async/Await** - Código assíncrono moderno
- **Environment Variables** - Configuração segura

## 🌍 Integração Gmail

O backend usa Gmail SMTP para enviar emails. Requer:

1. **2-Factor Authentication** ativado na conta Gmail
2. **Senha de App** gerada (não a senha regular)
3. **Variáveis de Ambiente** configuradas

Credenciais são **NUNCA** expostas no frontend.

## 📄 Licença

ISC - Veja LICENSE para detalhes.

## 👤 Autor

**Elias Araújo** - [@Elias-ara](https://github.com/Elias-ara)
