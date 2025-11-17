import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../_services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit, OnDestroy {
  translations: any;
  private languageSubscription?: Subscription;

  contactInfo = {
    email: 'elias.ara.dev@gmail.com',
    phone: '+55 (86) 99929-7067',
    location: 'PI-Brasil',
    locationEn: 'PI-Brazil',
  };

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'twitter',
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

  getLocation(): string {
    const currentLang = this.translationService.getCurrentLanguageValue();
    return currentLang === 'en' && this.contactInfo.locationEn
      ? this.contactInfo.locationEn
      : this.contactInfo.location;
  }

  onSubmit() {
    alert(this.translations?.contact?.successMessage || 'Message sent successfully!');
  }
}
