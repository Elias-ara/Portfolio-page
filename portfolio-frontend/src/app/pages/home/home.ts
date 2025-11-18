import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../_services/translation.service';
import { TYPING_TIMERS } from '../../_constants/timing.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  translations: any;
  private languageSubscription?: Subscription;
  typingText: string = '';
  private typingIndex: number = 0;
  private codeIndex: number = 0;
  private isDeleting: boolean = false;
  private typingTimer: any;

  profileImage: string = 'profile.jpg';

  codeSnippets = [
    'ng generate component user-profile',
    'const App = () => { return <div>Hello React</div>; };',
    'function greet(name) { return `Hello, ${name}!`; }',
    'npm install express mongoose',
    "import { Component } from '@angular/core';",
    'const [count, setCount] = useState(0);',
    "router.get('/api/users', async (req, res) => {",
    'interface User { id: number; name: string; }',
    'docker-compose up -d',
    'git push origin main',
  ];

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.translations = this.translationService.getTranslations();

    this.languageSubscription = this.translationService.getCurrentLanguage().subscribe(() => {
      this.translations = this.translationService.getTranslations();
    });

    // Iniciar efeito de digitação após um delay
    setTimeout(() => {
      this.startTyping();
    }, TYPING_TIMERS.HOME_INITIAL_DELAY);
  }

  startTyping(): void {
    const currentCode = this.codeSnippets[this.codeIndex];

    if (!this.isDeleting) {
      // Digitando
      this.typingText = currentCode.substring(0, this.typingIndex + 1);
      this.typingIndex++;

      if (this.typingText === currentCode) {
        // Terminou de digitar, esperar e começar a deletar
        this.typingTimer = setTimeout(() => {
          this.isDeleting = true;
          this.startTyping();
        }, TYPING_TIMERS.DISPLAY_DURATION);
        return;
      }
    } else {
      // Deletando
      this.typingText = currentCode.substring(0, this.typingIndex - 1);
      this.typingIndex--;

      if (this.typingText === '') {
        // Terminou de deletar, passar para o próximo código
        this.isDeleting = false;
        this.codeIndex = (this.codeIndex + 1) % this.codeSnippets.length;
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

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }
}
