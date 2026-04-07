import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonAlert,
  IonButton,
  IonContent,
  IonLabel,
  IonListHeader,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-alert-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonAlert, IonButton, IonContent, IonLabel, IonListHeader, DemoHeader],
  template: `
    <app-demo-header title="Alert" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-button (click)="basicOpen.set(true)">Basic Alert</ion-button>
      <ion-alert
        [isOpen]="basicOpen()"
        header="Alert"
        message="This is a basic alert."
        [buttons]="['OK']"
        (didDismiss)="basicOpen.set(false)"
      />

      <ion-list-header>
        <ion-label>With Sub Header</ion-label>
      </ion-list-header>
      <ion-button (click)="subHeaderOpen.set(true)">Sub Header Alert</ion-button>
      <ion-alert
        [isOpen]="subHeaderOpen()"
        header="Alert"
        subHeader="Important message"
        message="This alert has a sub header for additional context."
        [buttons]="['OK']"
        (didDismiss)="subHeaderOpen.set(false)"
      />

      <ion-list-header>
        <ion-label>Multiple Buttons</ion-label>
      </ion-list-header>
      <ion-button (click)="multiButtonOpen.set(true)">Multi Button Alert</ion-button>
      <ion-alert
        [isOpen]="multiButtonOpen()"
        header="Confirm"
        message="Do you want to proceed?"
        [buttons]="confirmButtons"
        (didDismiss)="multiButtonOpen.set(false)"
      />

      <ion-list-header>
        <ion-label>With Inputs</ion-label>
      </ion-list-header>
      <ion-button (click)="inputOpen.set(true)">Prompt Alert</ion-button>
      <ion-alert
        [isOpen]="inputOpen()"
        header="Enter your name"
        [inputs]="promptInputs"
        [buttons]="promptButtons"
        (didDismiss)="inputOpen.set(false)"
      />

      <ion-list-header>
        <ion-label>With Radio Buttons</ion-label>
      </ion-list-header>
      <ion-button (click)="radioOpen.set(true)">Radio Alert</ion-button>
      <ion-alert
        [isOpen]="radioOpen()"
        header="Select a color"
        [inputs]="radioInputs"
        [buttons]="radioButtons"
        (didDismiss)="radioOpen.set(false)"
      />

      @if (alertResult()) {
        <p class="ion-padding">Last result: {{ alertResult() }}</p>
      }
    </ion-content>
  `,
})
export class AlertDemo {
  protected readonly basicOpen = signal(false);
  protected readonly subHeaderOpen = signal(false);
  protected readonly multiButtonOpen = signal(false);
  protected readonly inputOpen = signal(false);
  protected readonly radioOpen = signal(false);
  protected readonly alertResult = signal('');

  protected readonly confirmButtons = [
    { text: 'Cancel', role: 'cancel' },
    { text: 'OK', role: 'confirm' },
  ];

  protected readonly promptInputs = [
    { placeholder: 'Name', name: 'name' },
  ];

  protected readonly promptButtons = [
    { text: 'Cancel', role: 'cancel' },
    {
      text: 'OK',
      handler: (data: Record<string, string>) => {
        this.alertResult.set(`Name: ${data['name'] ?? ''}`);
      },
    },
  ];

  protected readonly radioInputs = [
    { label: 'Red', type: 'radio' as const, value: 'red' },
    { label: 'Green', type: 'radio' as const, value: 'green' },
    { label: 'Blue', type: 'radio' as const, value: 'blue' },
  ];

  protected readonly radioButtons = [
    { text: 'Cancel', role: 'cancel' },
    {
      text: 'OK',
      handler: (value: string) => {
        this.alertResult.set(`Color: ${value}`);
      },
    },
  ];
}
