import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'pt' | 'en';

export interface Translations {
  // Navbar
  navbar: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  // Home
  home: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    whatIDo: string;
    specializedIn: string;
    frontendDev: string;
    frontendDesc: string;
    backendDev: string;
    backendDesc: string;
    responsiveDesign: string;
    responsiveDesc: string;
  };
  // About
  about: {
    title: string;
    description: string;
    myStory: string;
    myStoryText1: string;
    myStoryText2: string;
    objectives: string;
    objectivesText1: string;
    objectivesText2: string;
    skills: string;
    softSkills: string;
    communication: string;
    communicationDesc: string;
    teamwork: string;
    teamworkDesc: string;
    problemSolving: string;
    problemSolvingDesc: string;
    adaptability: string;
    adaptabilityDesc: string;
    leadership: string;
    leadershipDesc: string;
    timeManagement: string;
    timeManagementDesc: string;
  };
  // Projects
  projects: {
    title: string;
    subtitle: string;
    technologies: string;
    viewProject: string;
  };
  // Contact
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    contactInfo: string;
    phone: string;
    location: string;
    socialMedia: string;
    successMessage: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    navbar: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    home: {
      greeting: 'Olá, eu sou',
      name: 'Elias Araújo',
      title: 'Desenvolvedor Full Stack',
      description:
        'Criando soluções inovadoras e interfaces modernas com as melhores tecnologias do mercado.',
      viewProjects: 'Ver Projetos',
      contactMe: 'Entre em Contato',
      whatIDo: 'O que eu faço',
      specializedIn: 'Especializado em desenvolvimento web moderno e soluções escaláveis',
      frontendDev: 'Desenvolvimento Frontend',
      frontendDesc: 'Criação de interfaces modernas e responsivas com Angular e React',
      backendDev: 'Desenvolvimento Backend',
      backendDesc:
        'APIs RESTful, microserviços e arquiteturas escaláveis com Node.js, java e spring boot',
      responsiveDesign: 'Design Responsivo',
      responsiveDesc: 'Experiências otimizadas para todos os dispositivos e tamanhos de tela',
    },
    about: {
      title: 'Sobre Mim',
      description: 'Desenvolvedor apaixonado por criar soluções inovadoras e interfaces modernas.',
      myStory: 'Minha História',
      myStoryText1:
        'Sou um desenvolvedor full-stack com foco em tecnologias modernas. Tenho experiência em desenvolvimento web, criando aplicações escaláveis e performáticas.',
      myStoryText2:
        'Minha paixão por programação começou quando descobri o poder de transformar ideias em realidade através do código. Desde então, venho me dedicando a aprender novas tecnologias e melhorar minhas habilidades.',
      objectives: 'Objetivos',
      objectivesText1:
        'Busco constantemente desafios que me permitam crescer profissionalmente e contribuir para projetos inovadores. Acredito no poder da tecnologia para resolver problemas reais e melhorar a vida das pessoas.',
      objectivesText2:
        'Estou sempre aberto a novas oportunidades e colaborações que me permitam expandir meus conhecimentos e fazer a diferença.',
      skills: 'Ferramentas e Tecnologias',
      softSkills: 'Soft Skills',
      communication: 'Comunicação',
      communicationDesc:
        'Capacidade de expressar ideias de forma clara e objetiva, tanto em apresentações quanto em documentação técnica. Adoro colaborar e compartilhar conhecimento com o time.',
      teamwork: 'Trabalho em Equipe',
      teamworkDesc:
        'Valorizo a colaboração e acredito que os melhores resultados vêm quando trabalhamos juntos. Sou proativo em ajudar colegas e sempre busco contribuir para o sucesso do projeto.',
      problemSolving: 'Resolução de Problemas',
      problemSolvingDesc:
        'Frente a desafios, mantenho a calma e analiso o problema de forma estruturada. Gosto de pesquisar, testar e iterar até encontrar a melhor solução.',
      adaptability: 'Adaptabilidade',
      adaptabilityDesc:
        'Abraço mudanças e novas tecnologias com entusiasmo. Consigo me adaptar rapidamente a diferentes ambientes, ferramentas e metodologias de trabalho.',
      leadership: 'Liderança',
      leadershipDesc:
        'Inspiro através do exemplo e gosto de orientar outros desenvolvedores. Consigo tomar decisões bem fundamentadas e motivar o time para alcançar objetivos comuns.',
      timeManagement: 'Gestão de Tempo',
      timeManagementDesc:
        'Organizado e disciplinado, consigo priorizar tarefas e cumprir prazos. Utilizo técnicas de produtividade para garantir que os projetos sejam entregues com qualidade.',
    },
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Confira alguns dos projetos que desenvolvi ao longo da minha jornada',
      technologies: 'Tecnologias',
      viewProject: 'Ver Projeto',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estou sempre aberto a novas oportunidades e conversas. Fale comigo!',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      contactInfo: 'Informações de Contato',
      phone: 'Telefone',
      location: 'Localização',
      socialMedia: 'Redes Sociais',
      successMessage: 'Mensagem enviada com sucesso!',
    },
  },
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    home: {
      greeting: 'Hello, I am',
      name: 'Elias Araújo',
      title: 'Full Stack Developer',
      description:
        'Creating innovative solutions and modern interfaces with the best technologies in the market.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      whatIDo: 'What I do',
      specializedIn: 'Specialized in modern web development and scalable solutions',
      frontendDev: 'Frontend Development',
      frontendDesc: 'Creating modern and responsive interfaces with Angular, React and Vue.js',
      backendDev: 'Backend Development',
      backendDesc:
        'RESTful APIs, microservices and scalable architectures with Node.js, java and spring boot',
      responsiveDesign: 'Responsive Design',
      responsiveDesc: 'Optimized experiences for all devices and screen sizes',
    },
    about: {
      title: 'About Me',
      description:
        'Developer passionate about creating innovative solutions and modern interfaces.',
      myStory: 'My Story',
      myStoryText1:
        'I am a full-stack developer focused on modern technologies. I have experience in web development, creating scalable and performant applications.',
      myStoryText2:
        'My passion for programming began when I discovered the power of transforming ideas into reality through code. Since then, I have been dedicated to learning new technologies and improving my skills.',
      objectives: 'Objectives',
      objectivesText1:
        "I constantly seek challenges that allow me to grow professionally and contribute to innovative projects. I believe in the power of technology to solve real problems and improve people's lives.",
      objectivesText2:
        'I am always open to new opportunities and collaborations that allow me to expand my knowledge and make a difference.',
      skills: 'Skills',
      softSkills: 'Soft Skills',
      communication: 'Communication',
      communicationDesc:
        'Ability to express ideas clearly and objectively, both in presentations and technical documentation. I love collaborating and sharing knowledge with the team.',
      teamwork: 'Teamwork',
      teamworkDesc:
        'I value collaboration and believe that the best results come when we work together. I am proactive in helping colleagues and always seek to contribute to project success.',
      problemSolving: 'Problem Solving',
      problemSolvingDesc:
        'When facing challenges, I stay calm and analyze the problem in a structured way. I like to research, test and iterate until I find the best solution.',
      adaptability: 'Adaptability',
      adaptabilityDesc:
        'I embrace change and new technologies with enthusiasm. I can quickly adapt to different environments, tools and working methodologies.',
      leadership: 'Leadership',
      leadershipDesc:
        'I inspire through example and enjoy mentoring other developers. I can make well-founded decisions and motivate the team to achieve common goals.',
      timeManagement: 'Time Management',
      timeManagementDesc:
        'Organized and disciplined, I can prioritize tasks and meet deadlines. I use productivity techniques to ensure that projects are delivered with quality.',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Check out some of the projects I developed throughout my journey',
      technologies: 'Technologies',
      viewProject: 'View Project',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "I am always open to new opportunities and conversations. Let's talk!",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      contactInfo: 'Contact Information',
      phone: 'Phone',
      location: 'Location',
      socialMedia: 'Social Media',
      successMessage: 'Message sent successfully!',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage$ = new BehaviorSubject<Language>(
    (localStorage.getItem('language') as Language) || 'pt'
  );

  constructor() {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      this.currentLanguage$.next(savedLanguage);
    }
  }

  getCurrentLanguage(): Observable<Language> {
    return this.currentLanguage$.asObservable();
  }

  getCurrentLanguageValue(): Language {
    return this.currentLanguage$.value;
  }

  setLanguage(language: Language): void {
    this.currentLanguage$.next(language);
    localStorage.setItem('language', language);
  }

  getTranslations(): Translations {
    return translations[this.currentLanguage$.value];
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: any = translations[this.currentLanguage$.value];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        return key;
      }
    }

    return value || key;
  }
}
