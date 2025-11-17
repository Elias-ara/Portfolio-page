import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TranslationService } from '../../_services/translation.service';
import { EmailService } from '../../_services/email.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit, OnDestroy {
  @ViewChild('contactForm') contactForm?: NgForm;

  translations: any;
  isSubmitting: boolean = false;
  submitMessage: string = '';
  submitMessageType: 'success' | 'error' = 'success';
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
      url: 'https://www.linkedin.com/in/elias-ara',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Elias-ara',
      icon: 'github',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/eliaxs.mda',
      icon: 'instagram',
    },
  ];

  constructor(public translationService: TranslationService, private emailService: EmailService) {}

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

  onSubmit(): void {
    if (!this.contactForm || !this.contactForm.valid) {
      this.submitMessage =
        this.translations?.contact?.errorMessage ||
        'Por favor, preencha todos os campos corretamente.';
      this.submitMessageType = 'error';
      return;
    }

    this.isSubmitting = true;
    const formValue = this.contactForm.value;

    const emailPayload = {
      name: formValue.name,
      email: formValue.email,
      subject: formValue.subject,
      message: formValue.message,
    };

    this.emailService.sendEmail(emailPayload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitMessage =
          this.translations?.contact?.successMessage || 'Mensagem enviada com sucesso!';
        this.submitMessageType = 'success';
        this.contactForm?.resetForm();

        // Limpar mensagem após 5 segundos
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitMessage =
          this.translations?.contact?.errorSending || 'Erro ao enviar mensagem. Tente novamente.';
        this.submitMessageType = 'error';
        console.error('Erro ao enviar email:', error);
      },
    });
  }
}
