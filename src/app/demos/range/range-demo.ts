import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-range-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonItem, IonLabel, IonList, IonListHeader, IonRange, DemoHeader],
  template: `
    <app-demo-header title="Range" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-range aria-label="Basic range" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>With Label</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-range label="Volume" labelPlacement="start" />
        </ion-item>
        <ion-item>
          <ion-range label="Brightness" labelPlacement="stacked" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Min / Max / Step</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-range label="Temperature" [min]="0" [max]="100" [step]="10" [value]="50" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Snaps & Ticks</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-range label="Snaps" [min]="0" [max]="100" [step]="25" [snaps]="true" [ticks]="true" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Pin</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-range label="Pin" [pin]="true" [min]="0" [max]="100" [value]="50" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Dual Knobs</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-range label="Price" [dualKnobs]="true" [min]="0" [max]="100" [pin]="true" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-range label="Primary" color="primary" [value]="50" />
        </ion-item>
        <ion-item>
          <ion-range label="Secondary" color="secondary" [value]="50" />
        </ion-item>
        <ion-item>
          <ion-range label="Danger" color="danger" [value]="50" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Interactive</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-range
            label="Value"
            [value]="rangeValue()"
            [pin]="true"
            (ionInput)="rangeValue.set($any($event).detail.value)"
          />
        </ion-item>
      </ion-list>
      <p class="ion-padding-horizontal">Current value: {{ rangeValue() }}</p>
    </ion-content>
  `,
})
export class RangeDemo {
  protected readonly rangeValue = signal(50);
}
