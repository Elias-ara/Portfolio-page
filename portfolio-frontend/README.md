# 🎨 Portfolio Frontend

Frontend moderno e responsivo para portfólio pessoal, desenvolvido com **Angular 20** e **Bootstrap 5**.

![Angular](https://img.shields.io/badge/Angular-20.3.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square&logo=bootstrap)

## 📖 Sobre

Single Page Application (SPA) responsiva que apresenta informações pessoais, portfólio de projetos, habilidades técnicas e formulário de contato. A aplicação é totalmente acessível e suporta múltiplos idiomas (português e inglês).

## ✨ Características

- **Responsivo** - Design que funciona perfeitamente em desktop, tablet e mobile
- **Multi-idioma** - Suporte completo para português (PT) e inglês (EN)
- **Otimizado** - Bundle de apenas 609.68 kB (121.46 kB gzipped)
- **Componentes Modulares** - Arquitetura bem organizada e reutilizável
- **Animações** - Efeitos de digitação em tempo real e transições suaves
- **Acessibilidade** - Suporte a navegação por teclado e semântica HTML adequada

## 🏗️ Arquitetura

**Estrutura em camadas:**

```
src/
├── app/
│   ├── _components/          # Componentes compartilhados
│   │   ├── navbar/           # Navegação global
│   │   └── footer/           # Rodapé com redes sociais
│   ├── _services/            # Serviços (Email, Tradução)
│   ├── _constants/           # Constantes do projeto
│   ├── _styles/              # Estilos específicos
│   ├── pages/                # Páginas da aplicação
│   │   ├── home/             # Página inicial
│   │   ├── about/            # Sobre + Skills
│   │   ├── projects/         # Galeria de projetos
│   │   └── contact/          # Formulário de contato
│   ├── app.ts                # Componente raiz
│   └── app-routing-module.ts # Configuração de rotas
├── main.ts                   # Entry point
├── styles.css                # Estilos globais
└── index.html                # Template HTML
```

## � Páginas

| Página   | Rota        | Descrição                                       |
| -------- | ----------- | ----------------------------------------------- |
| Home     | `/`         | Apresentação pessoal com efeito de digitação    |
| About    | `/sobre`    | Informações, habilidades técnicas e soft skills |
| Projects | `/projetos` | Galeria de projetos (estrutura preparada)       |
| Contact  | `/contato`  | Formulário de contato com validação             |

## 🛠️ Stack Técnico

- **Angular 20.3.0** - Framework web progressive
- **TypeScript 5.9** - Linguagem com tipagem estática
- **Bootstrap 5.3** - Framework CSS responsivo
- **RxJS 7.8** - Biblioteca de programação reativa
- **Angular CLI 20.3.9** - Tooling e bundling

## 🌐 Suporte a Idiomas

A aplicação oferece suporte completo para:

- **Português Brasileiro (PT)** - Idioma padrão
- **Inglês (EN)** - Completamente traduzido

Trocador de idioma na navbar com persistência de preferência via localStorage.

## 📊 Performance

- **Bundle Size**: 609.68 kB (raw) / 121.46 kB (gzipped)
- **Build Tool**: Vite + Angular CLI
- **Code Splitting**: Roteamento otimizado
- **Lazy Loading**: Carregamento sob demanda de módulos

## 🔐 Segurança

- **Sanitização XSS** - Angular trata automaticamente conteúdo dinâmico
- **CORS** - Comunicação apenas com backend autorizado
- **Validação Frontend** - Dupla validação com backend
- **Sem Credenciais** - Todas as credenciais no backend

## 📱 Responsividade

- **Mobile-First** - Otimizado para dispositivos móveis
- **Breakpoints Bootstrap**: xs, sm, md, lg, xl
- **Viewport Meta Tags** - Configurado corretamente
- **Touch-Friendly** - Interface adaptada para touch

## 🔌 Integração Backend

A aplicação se comunica com backend em:

```
http://localhost:3000/api/contact/send-email
```

Para produção, configure a URL do backend em `_services/email.service.ts`.

## � Estado da Aplicação

- **Serviço de Tradução** - Gerencia mudanças de idioma globalmente
- **Serviço de Email** - Comunica-se com backend para envio de mensagens
- **LocalStorage** - Persiste preferências do usuário (idioma)

## ♿ Acessibilidade

- Semântica HTML adequada (tags `<header>`, `<main>`, `<footer>`)
- Roles ARIA quando necessário
- Contraste de cores suficiente (WCAG AA)
- Navegação por teclado funcional
- Alt text em imagens

## 📦 Dependências Principais

```json
{
  "@angular/core": "^20.3.0",
  "@angular/forms": "^20.3.0",
  "@angular/router": "^20.3.0",
  "bootstrap": "^5.3.8",
  "rxjs": "~7.8.0"
}
```

## � Padrões e Boas Práticas

- **OnPush Change Detection** - Aplicado em componentes
- **Unsubscribe Pattern** - Previne memory leaks
- **Type Safety** - Strict mode TypeScript ativado
- **Lazy Loading** - Rotas carregam sob demanda
- **Tree Shaking** - Apenas código utilizado é incluído

## � Licença

ISC - Veja LICENSE para detalhes.

## 👤 Autor

**Elias Araújo** - [@Elias-ara](https://github.com/Elias-ara)
