import { computed, effect, Service, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme-mode';

@Service()
export class ThemeService {
  private readonly media = window.matchMedia('(prefers-color-scheme: dark)');
  private readonly systemDark = signal(this.media.matches);

  /** The user's choice: light, dark, or system (the default). */
  readonly mode = signal<ThemeMode>(this.readStored());

  /** The theme actually applied to the page. */
  readonly resolved = computed<'light' | 'dark'>(() =>
    this.mode() === 'system'
      ? this.systemDark()
        ? 'dark'
        : 'light'
      : (this.mode() as 'light' | 'dark'),
  );

  constructor() {
    this.media.addEventListener('change', (e) => this.systemDark.set(e.matches));

    effect(() => {
      const theme = this.resolved();
      document.documentElement.dataset['theme'] = theme;
      document.documentElement.style.colorScheme = theme;
      try {
        localStorage.setItem(STORAGE_KEY, this.mode());
      } catch {
        /* storage unavailable — ignore */
      }
    });
  }

  set(mode: ThemeMode): void {
    this.mode.set(mode);
  }

  private readStored(): ThemeMode {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === 'light' || v === 'dark' || v === 'system') return v;
    } catch {
      /* ignore */
    }
    return 'system';
  }
}
