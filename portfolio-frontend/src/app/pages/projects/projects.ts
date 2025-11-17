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

  projects: any[] = [];

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
}
