import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-radio-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent, IonItem, IonLabel, IonList, IonListHeader,
    IonRadio, IonRadioGroup, DemoHeader,
  ],
  template: `
    <app-demo-header title="Radio" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-radio-group value="apple">
          <ion-item>
            <ion-radio value="apple">Apple</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="banana">Banana</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="cherry">Cherry</ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-radio-group value="primary">
          <ion-item>
            <ion-radio color="primary" value="primary">Primary</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio color="secondary" value="secondary">Secondary</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio color="success" value="success">Success</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio color="warning" value="warning">Warning</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio color="danger" value="danger">Danger</ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <ion-list-header>
        <ion-label>States</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-radio-group value="enabled">
          <ion-item>
            <ion-radio value="enabled">Enabled</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="disabled" [disabled]="true">Disabled</ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <ion-list-header>
        <ion-label>Label Placement</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-radio-group value="start">
          <ion-item>
            <ion-radio value="start" labelPlacement="start">Start</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="end" labelPlacement="end">End</ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <ion-list-header>
        <ion-label>Interactive</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-radio-group
          [value]="selectedPet()"
          (ionChange)="selectedPet.set($any($event).detail.value)"
        >
          <ion-item>
            <ion-radio value="cat">Cat</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="dog">Dog</ion-radio>
          </ion-item>
          <ion-item>
            <ion-radio value="hamster">Hamster</ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
      <p class="ion-padding-horizontal">Selected: {{ selectedPet() }}</p>
    </ion-content>
  `,
})
export class RadioDemo {
  protected readonly selectedPet = signal('cat');
}
