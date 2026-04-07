import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonLabel,
  IonListHeader,
  IonToast,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-toast-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonButton, IonContent, IonLabel, IonListHeader, IonToast, DemoHeader],
  template: `
    <app-demo-header title="Toast" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Positions</ion-label>
      </ion-list-header>
      <ion-button (click)="showToast('top')">Top</ion-button>
      <ion-button (click)="showToast('middle')">Middle</ion-button>
      <ion-button (click)="showToast('bottom')">Bottom</ion-button>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <ion-button color="success" (click)="showColorToast('success')">Success</ion-button>
      <ion-button color="warning" (click)="showColorToast('warning')">Warning</ion-button>
      <ion-button color="danger" (click)="showColorToast('danger')">Danger</ion-button>

      <ion-list-header>
        <ion-label>With Buttons</ion-label>
      </ion-list-header>
      <ion-button (click)="actionToastOpen.set(true)">Toast with Action</ion-button>

      <ion-toast
        [isOpen]="positionToastOpen()"
        [message]="'Toast at ' + toastPosition()"
        [position]="toastPosition()"
        [duration]="2000"
        (didDismiss)="positionToastOpen.set(false)"
      />

      <ion-toast
        [isOpen]="colorToastOpen()"
        [message]="toastColor() + ' toast message'"
        [color]="toastColor()"
        position="bottom"
        [duration]="2000"
        (didDismiss)="colorToastOpen.set(false)"
      />

      <ion-toast
        [isOpen]="actionToastOpen()"
        message="Item deleted"
        position="bottom"
        [duration]="3000"
        [buttons]="actionButtons"
        (didDismiss)="actionToastOpen.set(false)"
      />
    </ion-content>
  `,
})
export class ToastDemo {
  protected readonly positionToastOpen = signal(false);
  protected readonly colorToastOpen = signal(false);
  protected readonly actionToastOpen = signal(false);
  protected readonly toastPosition = signal<'top' | 'middle' | 'bottom'>('bottom');
  protected readonly toastColor = signal('success');

  protected readonly actionButtons = [
    { text: 'Undo', role: 'cancel' },
  ];

  protected showToast(position: 'top' | 'middle' | 'bottom'): void {
    this.toastPosition.set(position);
    this.positionToastOpen.set(true);
  }

  protected showColorToast(color: string): void {
    this.toastColor.set(color);
    this.colorToastOpen.set(true);
  }
}
