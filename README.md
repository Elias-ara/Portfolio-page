# 🎯 Portfolio - Elias Araújo

Um portfólio moderno e responsivo desenvolvido com **Angular 20** e um backend robusto com **Node.js + Express** para gerenciar envios de email.

![Angular](https://img.shields.io/badge/Angular-20.3.0-red?style=flat-square&logo=angular)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square&logo=bootstrap)

---

## 📋 Índice

- [Características](#características)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Configuração](#configuração)
- [Deploy](#deploy)
- [Tecnologias](#tecnologias)
- [Autor](#autor)

---

## ✨ Características

### Frontend (Angular)

- ✅ **Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Multi-idioma** - Suporte para Português (PT) e Inglês (EN)
- ✅ **Otimizado** - Bundle de apenas ~413 KB
- ✅ **Modular** - Componentes reutilizáveis e bem estruturados
- ✅ **Dinâmico** - Página de projetos, sobre, contato e home
- ✅ **Acessível** - Suporte a navegação por teclado

### Backend (Node.js)

- ✅ **Validação** - Validação de formulário em frontend e backend
- ✅ **Rate Limiting** - Proteção contra spam (5 emails/15 minutos por IP)
- ✅ **CORS** - Configurado para aceitar requisições do frontend
- ✅ **Email** - Integração com Gmail via Nodemailer
- ✅ **Logs** - Sistema detalhado de logging
- ✅ **Segurança** - Sanitização de dados e tratamento de erros

---

## 📁 Estrutura do Projeto

```
portfolio/
├── portfolio-frontend/          # Aplicação Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── _components/     # Componentes compartilhados
│   │   │   │   ├── navbar/      # Navegação
│   │   │   │   └── footer/      # Rodapé
│   │   │   ├── _services/       # Serviços (Email, Tradução)
│   │   │   ├── pages/           # Páginas
│   │   │   │   ├── home/        # Página inicial
│   │   │   │   ├── about/       # Sobre
│   │   │   │   ├── projects/    # Projetos
│   │   │   │   └── contact/     # Formulário de contato
│   │   │   ├── app.ts           # Componente principal
│   │   │   └── app-routing-module.ts
│   │   ├── main.ts
│   │   ├── styles.css           # Estilos globais
│   │   └── index.html
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── portfolio-backend/           # Backend Node.js
│   ├── src/
│   │   ├── app.js               # Configuração Express
│   │   ├── server.js            # Servidor principal
│   │   ├── routes/
│   │   │   └── contact.js       # Rotas de contato
│   │   ├── controllers/
│   │   │   └── contactController.js
│   │   ├── services/
│   │   │   └── emailService.js  # Serviço de email (Nodemailer)
│   │   ├── middleware/
│   │   │   ├── validation.js    # Validação de formulário
│   │   │   ├── rateLimiter.js   # Rate limiting
│   │   │   └── errorHandler.js
│   │   └── config/
│   │       └── emailConfig.js
│   ├── .env                     # Variáveis de ambiente (não committed)
│   ├── .env.example             # Exemplo de .env
│   ├── package.json
│   └── test-smtp.js             # Teste de conexão SMTP
│
└── README.md                    # Este arquivo
```

---

## 🚀 Instalação

### Pré-requisitos

- Node.js v18+ e npm
- Git
- Conta Gmail com 2-Factor Authentication ativado

### Passo 1: Clone o repositório

```bash
git clone https://github.com/Elias-ara/Portfolio-page.git
cd Portfolio-page
```

### Passo 2: Instale dependências do Frontend

```bash
cd portfolio-frontend
npm install
```

### Passo 3: Instale dependências do Backend

```bash
cd ../portfolio-backend
npm install
```

### Passo 4: Configure o Backend

Crie um arquivo `.env` no diretório `portfolio-backend/`:

```properties
PORT=3000

# Gmail SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu_email@gmail.com
SMTP_PASSWORD=sua_senha_de_app
SMTP_FROM_EMAIL=seu_email@gmail.com

# Configuração de contato
CONTACT_EMAIL=seu_email@gmail.com

# CORS
CORS_ORIGIN=http://localhost:4200
```

**Como gerar a senha de app:**

1. Ative 2-Factor Authentication em: https://myaccount.google.com/security
2. Vá para: https://myaccount.google.com/apppasswords
3. Selecione "Mail" e "Linux (ou seu SO)"
4. Copie a senha de 16 caracteres
5. Cole em `SMTP_PASSWORD` (sem espaços)

---

## 💻 Uso

### Desenvolvimento Local

**Terminal 1 - Backend:**

```bash
cd portfolio-backend
npm start
```

O servidor estará disponível em `http://localhost:3000`

**Terminal 2 - Frontend:**

```bash
cd portfolio-frontend
ng serve
# ou
npm start
```

A aplicação estará disponível em `http://localhost:4200`

### Teste o Formulário de Contato

1. Abra: http://localhost:4200/contato (ou clique em "Contato" na navbar)
2. Preencha o formulário:
   - Nome (min. 3 caracteres)
   - Email válido
   - Assunto (min. 5 caracteres)
   - Mensagem (min. 10 caracteres)
3. Clique em "Enviar Mensagem"
4. Você deve receber um email em poucos segundos

### Teste com curl (Terminal)

```bash
curl -X POST http://localhost:3000/api/contact/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "subject": "Teste do formulário",
    "message": "Esta é uma mensagem de teste completa com mais de 10 caracteres"
  }'
```

Resposta esperada:

```json
{
  "success": true,
  "message": "Email enviado com sucesso!"
}
```

---

## ⚙️ Configuração

### Frontend

#### Adicionar/Remover Idiomas

Edite `portfolio-frontend/src/app/_services/translation.service.ts`

#### Atualizar Redes Sociais

Edite `portfolio-frontend/src/app/pages/contact/contact.ts`:

```typescript
socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/seu_perfil",
    icon: "linkedin",
  },
  // ...
];
```

### Backend

#### Mudar Limite de Rate Limiting

Edite `portfolio-backend/src/middleware/rateLimiter.js`:

```javascript
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Janela de tempo (15 minutos)
  max: 5, // Máximo de requisições por IP
  message: "Muitas requisições. Tente novamente em 15 minutos.",
});
```

#### Validação Customizada

Edite `portfolio-backend/src/middleware/validation.js`

---

## 🌐 Deploy

### Deploy do Backend

#### Opção 1: Render (Recomendado)

1. Crie conta em: https://render.com
2. Clique em "New Web Service"
3. Conecte seu GitHub
4. Selecione o repositório
5. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Adicione variáveis de `.env`
6. Deploy

#### Opção 2: Railway

1. Crie conta em: https://railway.app
2. Clique em "New Project"
3. Selecione "Deploy from GitHub"
4. Configure variáveis de ambiente
5. Deploy automático

### Deploy do Frontend

#### Opção 1: Vercel (Recomendado)

```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
cd portfolio-frontend
vercel
```

#### Opção 2: Netlify

```bash
# Build
ng build

# Deploy
# Arraste a pasta 'dist' para https://app.netlify.com
```

#### Após deploy, atualize backendUrl

Edite `portfolio-frontend/src/app/_services/email.service.ts`:

```typescript
private backendUrl = 'https://seu-backend.onrender.com/api';
```

---

## 🛠️ Tecnologias

### Frontend

- **Angular 20.3.0** - Framework web
- **TypeScript 5.9.2** - Linguagem
- **Bootstrap 5.3.8** - CSS Framework
- **RxJS 7.8** - Programação reativa

### Backend

- **Node.js** - Runtime
- **Express 5.1** - Framework web
- **Nodemailer 7.0** - Envio de emails
- **Express-rate-limit** - Rate limiting
- **Dotenv 17.2** - Variáveis de ambiente
- **CORS 2.8** - Cross-origin requests
- **Body-parser 2.2** - Parsing de JSON

### Desenvolvimento

- **Angular CLI 20.3.9** - CLI do Angular
- **Prettier** - Formatação de código
- **Git** - Versionamento

---

## 📊 Performance

- **Bundle Size**: ~413 KB (uncompressed)
- **Lighthouse Score**: A (90+)
- **Mobile Friendly**: ✅ Sim
- **Email Response Time**: < 2 segundos

---

## 🔒 Segurança

- ✅ CORS habilitado apenas para frontend
- ✅ Rate limiting (5 emails/15min)
- ✅ Validação de entrada (frontend + backend)
- ✅ Sanitização de dados
- ✅ Tratamento de erros seguro
- ✅ Variáveis de ambiente (não comitadas)

---

## 🐛 Troubleshooting

### Backend não conecta ao Gmail

```bash
# Teste a conexão SMTP
cd portfolio-backend
node test-smtp.js
```

Se o erro for "Invalid login":

1. Verifique se 2FA está ativado
2. Gere nova senha de app
3. Copie SEM ESPAÇOS
4. Atualize `.env`

### Frontend não conecta ao backend

1. Verifique se backend está rodando: `http://localhost:3000/health`
2. Verifique CORS_ORIGIN em `.env`
3. Verifique backendUrl em `email.service.ts`

### Limite de rate limiting atingido

Aguarde 15 minutos e tente novamente (ou altere o limite em `rateLimiter.js`)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👤 Autor

**Elias Araújo**

- GitHub: [@Elias-ara](https://github.com/Elias-ara)
- Email: elias.ara.dev@gmail.com
- LinkedIn: [seu-perfil](https://linkedin.com)

---

## 🎉 Agradecimentos

Obrigado por visitar meu portfólio! Se você gostou, deixe uma ⭐ no GitHub!

---

## 📞 Suporte

Tem alguma dúvida ou sugestão? Abra uma issue no GitHub ou entre em contato!

**Versão**: 1.0.0  
**Última atualização**: Novembro 2025
