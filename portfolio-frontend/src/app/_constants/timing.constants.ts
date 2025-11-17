/**
 * Global Timing Constants
 * Centralized timing values for animations and transitions
 */

export const TYPING_TIMERS = {
  INITIAL_DELAY: 800, // Delay antes de começar a digitar (navbar)
  DISPLAY_DURATION: 2000, // Tempo que o texto fica visível
  PAUSE_BETWEEN_CYCLES: 500, // Pausa entre ciclos de digitação
  TYPING_SPEED: 100, // Velocidade ao digitar
  DELETING_SPEED: 50, // Velocidade ao deletar (mais rápido)
  HOME_INITIAL_DELAY: 2000, // Delay inicial na home
} as const;
