import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonToggle,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-toggle-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonItem, IonLabel, IonList, IonListHeader, IonToggle, DemoHeader],
  template: `
    <app-demo-header title="Toggle" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-toggle>Default Toggle</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle [checked]="true">Checked</ion-toggle>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-toggle color="primary" [checked]="true">Primary</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle color="secondary" [checked]="true">Secondary</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle color="tertiary" [checked]="true">Tertiary</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle color="success" [checked]="true">Success</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle color="warning" [checked]="true">Warning</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle color="danger" [checked]="true">Danger</ion-toggle>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>States</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-toggle [disabled]="true">Disabled Off</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle [disabled]="true" [checked]="true">Disabled On</ion-toggle>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Label Placement</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-toggle labelPlacement="start">Start</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle labelPlacement="end">End</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle justify="space-between" labelPlacement="start">Justified</ion-toggle>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Interactive</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-toggle
            [checked]="wifiEnabled()"
            (ionChange)="wifiEnabled.set($any($event).detail.checked)"
          >
            Wi-Fi: {{ wifiEnabled() ? 'On' : 'Off' }}
          </ion-toggle>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class ToggleDemo {
  protected readonly wifiEnabled = signal(true);
}
