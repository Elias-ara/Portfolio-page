import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../_services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit, OnDestroy {
  translations: any;
  private languageSubscription?: Subscription;
  
  projects = [
    {
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de e-commerce com carrinho de compras, pagamento e gestão de produtos.',
      descriptionEn: 'Complete e-commerce platform with shopping cart, payment and product management.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x250?text=E-commerce',
      link: '#',
    },
    {
      title: 'Dashboard Analytics',
      description:
        'Dashboard interativo para análise de dados com gráficos e relatórios em tempo real.',
      descriptionEn: 'Interactive dashboard for data analysis with charts and real-time reports.',
      technologies: ['Angular', 'Chart.js', 'REST API'],
      image: 'https://via.placeholder.com/400x250?text=Dashboard',
      link: '#',
    },
    {
      title: 'App de Tarefas',
      titleEn: 'Task App',
      description:
        'Aplicativo de gerenciamento de tarefas com drag-and-drop e sincronização em nuvem.',
      descriptionEn: 'Task management application with drag-and-drop and cloud synchronization.',
      technologies: ['Angular', 'Firebase', 'Material Design'],
      image: 'https://via.placeholder.com/400x250?text=Task+App',
      link: '#',
    },
    {
      title: 'Blog Pessoal',
      titleEn: 'Personal Blog',
      description:
        'Blog responsivo com sistema de comentários e categorias, construído com Angular.',
      descriptionEn: 'Responsive blog with comment system and categories, built with Angular.',
      technologies: ['Angular', 'Bootstrap', 'Node.js'],
      image: 'https://via.placeholder.com/400x250?text=Blog',
      link: '#',
    },
  ];

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.translations = this.translationService.getTranslations();
    
    this.languageSubscription = this.translationService.getCurrentLanguage().subscribe(() => {
      this.translations = this.translationService.getTranslations();
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  getProjectTitle(project: any): string {
    const currentLang = this.translationService.getCurrentLanguageValue();
    return currentLang === 'en' && project.titleEn ? project.titleEn : project.title;
  }

  getProjectDescription(project: any): string {
    const currentLang = this.translationService.getCurrentLanguageValue();
    return currentLang === 'en' && project.descriptionEn ? project.descriptionEn : project.description;
  }
}

