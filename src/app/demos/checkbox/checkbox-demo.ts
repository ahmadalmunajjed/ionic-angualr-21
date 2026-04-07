import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonCheckbox,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-checkbox-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonCheckbox, IonContent, IonItem, IonLabel, IonList, IonListHeader, DemoHeader],
  template: `
    <app-demo-header title="Checkbox" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-checkbox>Default</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox [checked]="true">Checked</ion-checkbox>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-checkbox color="primary" [checked]="true">Primary</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox color="secondary" [checked]="true">Secondary</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox color="tertiary" [checked]="true">Tertiary</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox color="success" [checked]="true">Success</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox color="warning" [checked]="true">Warning</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox color="danger" [checked]="true">Danger</ion-checkbox>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>States</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-checkbox [disabled]="true">Disabled</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox [disabled]="true" [checked]="true">Disabled Checked</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox [indeterminate]="true">Indeterminate</ion-checkbox>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Label Placement</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-checkbox labelPlacement="start">Start</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox labelPlacement="end">End</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox justify="space-between" labelPlacement="start">Justified</ion-checkbox>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Interactive</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-checkbox
            [checked]="accepted()"
            (ionChange)="accepted.set($any($event).detail.checked)"
          >
            I accept the terms: {{ accepted() ? 'Yes' : 'No' }}
          </ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class CheckboxDemo {
  protected readonly accepted = signal(false);
}
