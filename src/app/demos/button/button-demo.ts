import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonLabel,
  IonListHeader,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heartOutline, star, starOutline } from 'ionicons/icons';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-button-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonButton, IonContent, IonIcon, IonLabel, IonListHeader, DemoHeader],
  template: `
    <app-demo-header title="Button" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Fill</ion-label>
      </ion-list-header>
      <ion-button fill="solid">Solid</ion-button>
      <ion-button fill="outline">Outline</ion-button>
      <ion-button fill="clear">Clear</ion-button>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <ion-button color="primary">Primary</ion-button>
      <ion-button color="secondary">Secondary</ion-button>
      <ion-button color="tertiary">Tertiary</ion-button>
      <ion-button color="success">Success</ion-button>
      <ion-button color="warning">Warning</ion-button>
      <ion-button color="danger">Danger</ion-button>

      <ion-list-header>
        <ion-label>Sizes</ion-label>
      </ion-list-header>
      <ion-button size="small">Small</ion-button>
      <ion-button size="default">Default</ion-button>
      <ion-button size="large">Large</ion-button>

      <ion-list-header>
        <ion-label>With Icons</ion-label>
      </ion-list-header>
      <ion-button>
        <ion-icon slot="start" name="star" aria-hidden="true" />
        Icon Start
      </ion-button>
      <ion-button>
        Icon End
        <ion-icon slot="end" name="heart-outline" aria-hidden="true" />
      </ion-button>
      <ion-button aria-label="Star">
        <ion-icon slot="icon-only" name="star-outline" aria-hidden="true" />
      </ion-button>

      <ion-list-header>
        <ion-label>Expand</ion-label>
      </ion-list-header>
      <ion-button expand="block">Block</ion-button>
      <ion-button expand="full">Full Width</ion-button>

      <ion-list-header>
        <ion-label>States</ion-label>
      </ion-list-header>
      <ion-button [disabled]="true">Disabled</ion-button>
      <ion-button [strong]="true">Strong</ion-button>

      <ion-list-header>
        <ion-label>Interactive</ion-label>
      </ion-list-header>
      <ion-button (click)="clickCount.update(v => v + 1)">
        Clicked {{ clickCount() }} times
      </ion-button>
    </ion-content>
  `,
})
export class ButtonDemo {
  protected readonly clickCount = signal(0);

  constructor() {
    addIcons({ star, 'star-outline': starOutline, 'heart-outline': heartOutline });
  }
}
