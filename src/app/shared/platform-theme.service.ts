import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatformThemeService {
  private readonly doc = inject(DOCUMENT);

  readonly platform = signal<'ios' | 'md'>('ios');
  readonly theme = signal<'light' | 'dark'>('light');

  constructor() {
    effect(() => {
      this.doc.documentElement.setAttribute('mode', this.platform());
    });

    effect(() => {
      this.doc.documentElement.classList.toggle('ion-palette-dark', this.theme() === 'dark');
    });
  }

  togglePlatform(): void {
    this.platform.update(p => (p === 'ios' ? 'md' : 'ios'));
  }

  toggleTheme(): void {
    this.theme.update(t => (t === 'light' ? 'dark' : 'light'));
  }
}
