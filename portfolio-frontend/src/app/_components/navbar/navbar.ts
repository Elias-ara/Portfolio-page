import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService, Language } from '../../_services/translation.service';
import { TYPING_TIMERS } from '../../_constants/timing.constants';
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
  typingText: string = '';
  private typingIndex: number = 0;
  private isDeleting: boolean = false;
  private typingTimer: any;
  private titleText: string = 'Portfólio_Elias_ARA.init';

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.currentLanguage = this.translationService.getCurrentLanguageValue();
    this.translations = this.translationService.getTranslations();

    this.languageSubscription = this.translationService.getCurrentLanguage().subscribe((lang) => {
      this.currentLanguage = lang;
      this.translations = this.translationService.getTranslations();
    });

    // Iniciar efeito de digitação após um delay
    setTimeout(() => {
      this.startTyping();
    }, TYPING_TIMERS.INITIAL_DELAY);
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }

  startTyping(): void {
    if (!this.isDeleting) {
      // Digitando
      this.typingText = this.titleText.substring(0, this.typingIndex + 1);
      this.typingIndex++;

      if (this.typingText === this.titleText) {
        // Terminou de digitar, esperar e começar a deletar
        this.typingTimer = setTimeout(() => {
          this.isDeleting = true;
          this.startTyping();
        }, TYPING_TIMERS.DISPLAY_DURATION);
        return;
      }
    } else {
      // Deletando
      this.typingText = this.titleText.substring(0, this.typingIndex - 1);
      this.typingIndex--;

      if (this.typingText === '') {
        // Terminou de deletar, passar para o próximo ciclo
        this.isDeleting = false;
        this.typingTimer = setTimeout(() => {
          this.startTyping();
        }, TYPING_TIMERS.PAUSE_BETWEEN_CYCLES);
        return;
      }
    }

    // Velocidade de digitação (mais rápido ao deletar)
    const typingSpeed = this.isDeleting ? TYPING_TIMERS.DELETING_SPEED : TYPING_TIMERS.TYPING_SPEED;
    this.typingTimer = setTimeout(() => {
      this.startTyping();
    }, typingSpeed);
  }

  toggleLanguage(): void {
    const newLanguage: Language = this.currentLanguage === 'pt' ? 'en' : 'pt';
    this.translationService.setLanguage(newLanguage);
  }

  getLanguageLabel(): string {
    return this.currentLanguage === 'pt' ? 'EN' : 'PT';
  }
}
