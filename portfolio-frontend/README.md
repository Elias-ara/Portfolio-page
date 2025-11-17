# 🎨 Portfolio Frontend

Portfólio moderno e responsivo desenvolvido com Angular 20.

![Angular](https://img.shields.io/badge/Angular-20.3.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square&logo=bootstrap)

---

## ✨ Características

- ✅ Responsivo (Desktop, Tablet, Mobile)
- ✅ Multi-idioma (PT/EN)
- ✅ Formulário de contato integrado
- ✅ Otimizado (~413 KB bundle)
- ✅ Componentes reutilizáveis
- ✅ Acessível

---

## 📋 Páginas

- **Home** - Página inicial com apresentação
- **About** - Sobre o desenvolvedor
- **Projects** - Portfolio de projetos
- **Contact** - Formulário de contato

---

## 🛠️ Instalação

```bash
cd portfolio-frontend
npm install
```

---

## 🚀 Uso

### Desenvolvimento

```bash
ng serve
# ou
npm start
```

Acesse: `http://localhost:4200`

### Build para Produção

```bash
ng build
```

Output em `dist/`

---

## 📁 Estrutura

```
src/
├── app/
│   ├── _components/
│   │   ├── navbar/
│   │   └── footer/
│   ├── _services/
│   │   ├── email.service.ts
│   │   └── translation.service.ts
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── projects/
│   │   └── contact/
│   ├── app.ts
│   └── app-routing-module.ts
├── main.ts
├── styles.css
└── index.html
```

---

## 🔧 Configuração

### Alterar Idioma

Edite `app.ts`:

```typescript
constructor(public translationService: TranslationService) {
  this.translationService.setLanguage('pt'); // ou 'en'
}
```

### Adicionar Projeto

Edite `pages/projects/projects.ts`:

```typescript
projects = [
  {
    title: 'Novo Projeto',
    description: 'Descrição aqui',
    image: 'url-da-imagem',
    technologies: ['Tech1', 'Tech2'],
    link: 'https://github.com/...',
  },
  // ...
];
```

### Atualizar Dados de Contato

Edite `pages/contact/contact.ts`:

```typescript
contactInfo = {
  email: 'seu_email@gmail.com',
  phone: '+55 (00) 00000-0000',
  location: 'Seu Estado',
  locationEn: 'Your State',
};
```

---

## 🎯 Formulário de Contato

O formulário conecta ao backend em `http://localhost:3000/api`

### Validações

- Nome: mínimo 3 caracteres
- Email: formato válido
- Assunto: mínimo 5 caracteres
- Mensagem: mínimo 10 caracteres

### Configurar Backend URL

Edite `_services/email.service.ts`:

```typescript
private backendUrl = 'http://localhost:3000/api'; // Dev
private backendUrl = 'https://seu-backend.com/api'; // Prod
```

---

## 📦 Dependências

- **@angular/core** - Framework
- **@angular/forms** - Formulários
- **@angular/router** - Roteamento
- **bootstrap** - CSS Framework
- **rxjs** - Programação reativa

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Build: `ng build`
2. Deploy pasta `dist/` para Netlify

### GitHub Pages

```bash
ng build --base-href=/Portfolio-page/
# Deploy pasta dist para gh-pages branch
```

---

## 🆘 Troubleshooting

### Erro ao conectar ao backend

1. Verifique se backend está rodando
2. Confirme URL em `email.service.ts`
3. Verifique CORS no backend

### Página em branco

1. Verifique console do browser (F12)
2. Verifique `main.ts`
3. Limpe cache: `ng cache clean`

---

## 📊 Performance

- Bundle: ~413 KB
- Lighthouse: A (90+)
- Mobile Friendly: ✅

---

**Versão**: 1.0.0
