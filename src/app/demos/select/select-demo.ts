import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-select-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent, IonItem, IonLabel, IonList, IonListHeader,
    IonSelect, IonSelectOption, DemoHeader,
  ],
  template: `
    <app-demo-header title="Select" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-select label="Fruit" labelPlacement="floating" placeholder="Choose one">
            <ion-select-option value="apple">Apple</ion-select-option>
            <ion-select-option value="banana">Banana</ion-select-option>
            <ion-select-option value="cherry">Cherry</ion-select-option>
            <ion-select-option value="grape">Grape</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Label Placement</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-select label="Floating" labelPlacement="floating" placeholder="Select">
            <ion-select-option value="a">Option A</ion-select-option>
            <ion-select-option value="b">Option B</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-select label="Stacked" labelPlacement="stacked" placeholder="Select">
            <ion-select-option value="a">Option A</ion-select-option>
            <ion-select-option value="b">Option B</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-select label="Fixed" labelPlacement="fixed" placeholder="Select">
            <ion-select-option value="a">Option A</ion-select-option>
            <ion-select-option value="b">Option B</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Fill</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-select fill="solid" label="Solid" labelPlacement="floating">
            <ion-select-option value="a">Option A</ion-select-option>
            <ion-select-option value="b">Option B</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-select fill="outline" label="Outline" labelPlacement="floating">
            <ion-select-option value="a">Option A</ion-select-option>
            <ion-select-option value="b">Option B</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Interface</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-select label="Alert" labelPlacement="floating" interface="alert">
            <ion-select-option value="a">Option A</ion-select-option>
            <ion-select-option value="b">Option B</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-select label="Action Sheet" labelPlacement="floating" interface="action-sheet">
            <ion-select-option value="a">Option A</ion-select-option>
            <ion-select-option value="b">Option B</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-select label="Popover" labelPlacement="floating" interface="popover">
            <ion-select-option value="a">Option A</ion-select-option>
            <ion-select-option value="b">Option B</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Multiple</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-select label="Toppings" labelPlacement="floating" [multiple]="true" placeholder="Select toppings">
            <ion-select-option value="cheese">Cheese</ion-select-option>
            <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
            <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
            <ion-select-option value="olives">Olives</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Interactive</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-select
            label="Color"
            labelPlacement="floating"
            [value]="selectedColor()"
            (ionChange)="selectedColor.set($any($event).detail.value)"
          >
            <ion-select-option value="red">Red</ion-select-option>
            <ion-select-option value="green">Green</ion-select-option>
            <ion-select-option value="blue">Blue</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
      <p class="ion-padding-horizontal">Selected: {{ selectedColor() }}</p>
    </ion-content>
  `,
})
export class SelectDemo {
  protected readonly selectedColor = signal('red');
}
