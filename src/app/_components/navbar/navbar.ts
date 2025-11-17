import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService, Language } from '../../_services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  currentLanguage: Language = 'pt';
  translations: any;
  private languageSubscription?: Subscription;

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.currentLanguage = this.translationService.getCurrentLanguageValue();
    this.translations = this.translationService.getTranslations();
    
    this.languageSubscription = this.translationService.getCurrentLanguage().subscribe((lang) => {
      this.currentLanguage = lang;
      this.translations = this.translationService.getTranslations();
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  toggleLanguage(): void {
    const newLanguage: Language = this.currentLanguage === 'pt' ? 'en' : 'pt';
    this.translationService.setLanguage(newLanguage);
  }

  getLanguageLabel(): string {
    return this.currentLanguage === 'pt' ? 'EN' : 'PT';
  }
}
