import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoAndroid, logoApple, moonOutline, sunnyOutline } from 'ionicons/icons';
import { PlatformThemeService } from './platform-theme.service';

@Component({
  selector: 'app-demo-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar],
  template: `
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home" />
        </ion-buttons>
        <ion-title>{{ title() }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="themeService.togglePlatform()" [attr.aria-label]="themeService.platform() === 'ios' ? 'Switch to Android' : 'Switch to iOS'">
            <ion-icon slot="icon-only" [name]="themeService.platform() === 'ios' ? 'logo-android' : 'logo-apple'" aria-hidden="true" />
          </ion-button>
          <ion-button (click)="themeService.toggleTheme()" [attr.aria-label]="themeService.theme() === 'light' ? 'Switch to dark mode' : 'Switch to light mode'">
            <ion-icon slot="icon-only" [name]="themeService.theme() === 'light' ? 'moon-outline' : 'sunny-outline'" aria-hidden="true" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `,
})
export class DemoHeader {
  readonly title = input.required<string>();
  protected readonly themeService = inject(PlatformThemeService);

  constructor() {
    addIcons({ logoAndroid, logoApple, moonOutline, sunnyOutline });
  }
}
