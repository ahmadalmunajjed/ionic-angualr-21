import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-demo-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar],
  template: `
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home" />
        </ion-buttons>
        <ion-title>{{ title() }}</ion-title>
      </ion-toolbar>
    </ion-header>
  `,
})
export class DemoHeader {
  readonly title = input.required<string>();
}
