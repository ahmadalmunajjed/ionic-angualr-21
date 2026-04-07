import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, notificationsOutline } from 'ionicons/icons';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-badge-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonBadge, IonButton, IonContent, IonIcon, IonItem, IonLabel,
    IonList, IonListHeader, DemoHeader,
  ],
  template: `
    <app-demo-header title="Badge" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-badge color="primary">Primary</ion-badge>
        <ion-badge color="secondary">Secondary</ion-badge>
        <ion-badge color="tertiary">Tertiary</ion-badge>
        <ion-badge color="success">Success</ion-badge>
        <ion-badge color="warning">Warning</ion-badge>
        <ion-badge color="danger">Danger</ion-badge>
        <ion-badge color="light">Light</ion-badge>
        <ion-badge color="medium">Medium</ion-badge>
        <ion-badge color="dark">Dark</ion-badge>
      </div>

      <ion-list-header>
        <ion-label>In List Items</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-icon name="mail-outline" slot="start" aria-hidden="true" />
          <ion-label>Inbox</ion-label>
          <ion-badge slot="end" color="danger">12</ion-badge>
        </ion-item>
        <ion-item>
          <ion-icon name="notifications-outline" slot="start" aria-hidden="true" />
          <ion-label>Notifications</ion-label>
          <ion-badge slot="end" color="primary">3</ion-badge>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Interactive Counter</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-badge color="primary">{{ count() }}</ion-badge>
      </div>
      <div class="ion-padding-horizontal">
        <ion-button size="small" (click)="count.update(v => v + 1)">Increment</ion-button>
        <ion-button size="small" color="medium" (click)="count.set(0)">Reset</ion-button>
      </div>
    </ion-content>
  `,
  styles: `
    ion-badge {
      margin-inline-end: 8px;
      margin-block-end: 8px;
    }
  `,
})
export class BadgeDemo {
  protected readonly count = signal(1);

  constructor() {
    addIcons({ 'mail-outline': mailOutline, 'notifications-outline': notificationsOutline });
  }
}
