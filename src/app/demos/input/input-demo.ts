import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-input-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonInput, IonItem, IonLabel, IonList, IonListHeader, DemoHeader],
  template: `
    <app-demo-header title="Input" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Types</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-input label="Text" labelPlacement="floating" type="text" placeholder="Enter text" />
        </ion-item>
        <ion-item>
          <ion-input label="Number" labelPlacement="floating" type="number" placeholder="Enter number" />
        </ion-item>
        <ion-item>
          <ion-input label="Email" labelPlacement="floating" type="email" placeholder="Enter email" />
        </ion-item>
        <ion-item>
          <ion-input label="Password" labelPlacement="floating" type="password" placeholder="Enter password" />
        </ion-item>
        <ion-item>
          <ion-input label="URL" labelPlacement="floating" type="url" placeholder="Enter URL" />
        </ion-item>
        <ion-item>
          <ion-input label="Tel" labelPlacement="floating" type="tel" placeholder="Enter phone number" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Label Placement</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-input label="Floating" labelPlacement="floating" placeholder="Floating label" />
        </ion-item>
        <ion-item>
          <ion-input label="Stacked" labelPlacement="stacked" placeholder="Stacked label" />
        </ion-item>
        <ion-item>
          <ion-input label="Fixed" labelPlacement="fixed" placeholder="Fixed label" />
        </ion-item>
        <ion-item>
          <ion-input label="Start" labelPlacement="start" placeholder="Start label" />
        </ion-item>
        <ion-item>
          <ion-input label="End" labelPlacement="end" placeholder="End label" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Fill</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-input fill="solid" label="Solid" labelPlacement="floating" placeholder="Solid fill" />
        </ion-item>
        <ion-item>
          <ion-input fill="outline" label="Outline" labelPlacement="floating" placeholder="Outline fill" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>States</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-input label="Disabled" labelPlacement="floating" [disabled]="true" value="Cannot edit" />
        </ion-item>
        <ion-item>
          <ion-input label="Readonly" labelPlacement="floating" [readonly]="true" value="Read only value" />
        </ion-item>
        <ion-item>
          <ion-input label="With Clear" labelPlacement="floating" [clearInput]="true" value="Clear me" />
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-label>Helper & Counter</ion-label>
      </ion-list-header>
      <ion-list>
        <ion-item>
          <ion-input
            label="Username"
            labelPlacement="floating"
            helperText="Enter your username"
            errorText="Username is required"
            [counter]="true"
            maxlength="20"
            [value]="usernameValue()"
            (ionInput)="usernameValue.set($any($event).target.value)"
          />
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class InputDemo {
  protected readonly usernameValue = signal('');
}
