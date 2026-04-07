import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

const PLATFORM_KEY = 'ionic-platform';

@Injectable({ providedIn: 'root' })
export class PlatformThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly win = this.doc.defaultView!;

  readonly platform = signal<'ios' | 'md'>(
    (this.win.sessionStorage.getItem(PLATFORM_KEY) as 'ios' | 'md') ?? 'ios'
  );
  readonly theme = signal<'light' | 'dark'>('light');

  constructor() {
    effect(() => {
      this.doc.documentElement.classList.toggle('ion-palette-dark', this.theme() === 'dark');
    });
  }

  togglePlatform(): void {
    const next = this.platform() === 'ios' ? 'md' : 'ios';
    this.win.sessionStorage.setItem(PLATFORM_KEY, next);
    // Ionic web components cache their mode at initialization time.
    // A full reload is required so every component reinitializes with the new mode.
    this.win.location.reload();
  }

  toggleTheme(): void {
    this.theme.update(t => (t === 'light' ? 'dark' : 'light'));
  }
}
