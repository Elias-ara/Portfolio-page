# 🎯 Portfolio - Elias Araújo

Um portfólio moderno e responsivo desenvolvido com **Angular 20** e um backend robusto com **Node.js + Express** para gerenciar envios de email.

![Angular](https://img.shields.io/badge/Angular-20.3.0-red?style=flat-square&logo=angular)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square&logo=bootstrap)

## � Sobre

Portfolio de demonstração completo para **Elias Araújo**, desenvolvedor full stack. O projeto apresenta uma aplicação web moderna com duas camadas distintas:

- **Frontend**: Interface responsiva e moderna construída com Angular, apresentando seções de home, sobre, projetos e contato
- **Backend**: API REST escalável para processamento de mensagens de contato com validação, rate limiting e envio de emails via Gmail SMTP

---

## ✨ Características

### Frontend (Angular)

- **Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Multi-idioma** - Suporte para Português (PT) e Inglês (EN) com trocador dinâmico
- **Otimizado** - Bundle de apenas 609.68 kB (121.46 kB gzipped)
- **Modular** - Componentes reutilizáveis (navbar, footer, páginas)
- **Dinâmico** - Efeito de digitação em tempo real, transições suaves
- **Acessível** - Suporte a navegação por teclado e semântica HTML

### Backend (Node.js)

- **Validação Robusta** - Validação de formulário em backend
- **Rate Limiting** - Proteção contra spam (5 emails/15 minutos por IP)
- **CORS Seguro** - Configurado especificamente para o frontend
- **Email via SMTP** - Integração com Gmail via Nodemailer
- **Tratamento de Erros** - Error handling completo
- **Health Check** - Endpoint de status do servidor

## 🏗️ Arquitetura

```
Portfolio (Monorepo)
│
├── portfolio-frontend/          # Single Page Application (SPA)
│   └── Angular 20 + Bootstrap 5
│
└── portfolio-backend/           # REST API
    └── Node.js + Express 5
```

## 🛠️ Stack Técnico

### Frontend

- **Angular 20.3.0** - Framework para SPA
- **TypeScript 5.9** - Linguagem de programação com tipos
- **Bootstrap 5.3** - Framework CSS responsivo
- **RxJS 7.8** - Programação reativa

### Backend

- **Node.js 18+** - Runtime JavaScript
- **Express 5.1** - Framework web minimalista
- **Nodemailer 7.0** - Envio de emails
- **express-rate-limit** - Middleware de rate limiting

### DevOps

- **Git** - Controle de versão
- **npm** - Gerenciador de dependências
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📝 Funcionalidades Principais

### Página Home

- Apresentação pessoal com efeito de digitação
- Stack tecnológico com ícones
- Call-to-action para projetos e contato

### Página About

- História e objetivos profissionais
- Habilidades técnicas (15+ tecnologias)
- Soft skills (comunicação, trabalho em equipe, etc)
- Disponível em PT e EN

### Página Projects

- Galeria de projetos (estrutura preparada)
- Cards responsivos com informações do projeto
- Links diretos para repositórios/demos

### Formulário de Contato

- Validação em tempo real
- Integração com backend
- Envio de emails via Gmail SMTP
- Rate limiting para proteção
- Feedback visual de sucesso/erro
- Mensagens em português e inglês

## 🌐 Suporte a Idiomas

O projeto oferece suporte completo para dois idiomas:

- **Português Brasileiro (PT)** - Idioma padrão
- **Inglês (EN)** - Completamente traduzido

Trocador de idioma localizado na navbar com persistência de preferência.

## � Performance

- **Bundle Size**: 609.68 kB (raw) | 121.46 kB (gzipped)
- **Build Tool**: Angular CLI com Vite
- **Lazy Loading**: Roteamento otimizado
- **Rate Limit**: 5 emails / 15 minutos por IP

## 🔐 Segurança

- **CORS**: Restrito ao frontend local
- **Rate Limiting**: Proteção contra spam
- **Validação**: Dupla validação (client + server)
- **Variáveis de Ambiente**: Credenciais seguras em .env
- **Error Handling**: Mensagens de erro genéricas ao cliente

## 👤 Autor

**Elias Araújo**

- GitHub: [@Elias-ara](https://github.com/Elias-ara)
- LinkedIn: [elias-ara](https://linkedin.com/in/elias-ara)
- Instagram: [@eliaxs.mda](https://instagram.com/eliaxs.mda)

## 📄 Licença

Este projeto é de código aberto e disponível sob a licença ISC.
"email": "joao@example.com",
"subject": "Teste do formulário",
"message": "Esta é uma mensagem de teste completa com mais de 10 caracteres"
}'

````

Resposta esperada:

```json
{
  "success": true,
  "message": "Email enviado com sucesso!"
}
````

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

---

## 👤 Autor

**Elias Araújo**

- GitHub: [@Elias-ara](https://github.com/Elias-ara)
- LinkedIn: [elias-ara](https://linkedin.com/in/elias-ara)
- Instagram: [@eliaxs.mda](https://instagram.com/eliaxs.mda)

## � Licença

Este projeto é de código aberto e disponível sob a licença ISC.
