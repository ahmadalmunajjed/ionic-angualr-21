import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-modal-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DemoHeader,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonModal,
    IonTitle,
    IonToolbar,
  ],
  template: `
    <app-demo-header title="Modal" />

    <ion-content class="ion-padding">

      <!-- Basic Modal -->
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-button (click)="basicOpen.set(true)">Open Modal</ion-button>

      <ion-modal #basicModal [isOpen]="basicOpen()" (didDismiss)="basicOpen.set(false)">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Basic Modal</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="basicModal.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <p>This is a basic full-screen modal. It can contain any content.</p>
            <p>Tap the close button or swipe down to dismiss.</p>
          </ion-content>
        </ng-template>
      </ion-modal>

      <!-- Sheet Modal -->
      <ion-list-header>
        <ion-label>Sheet Modal</ion-label>
      </ion-list-header>
      <ion-button (click)="sheetOpen.set(true)">Open Sheet</ion-button>

      <ion-modal
        #sheetModal
        [isOpen]="sheetOpen()"
        [breakpoints]="[0, 0.25, 0.5, 0.75, 1]"
        [initialBreakpoint]="0.5"
        (didDismiss)="sheetOpen.set(false)"
      >
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Sheet Modal</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="sheetModal.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <p>This is a sheet modal. It starts at 50% height and can be dragged to 25%, 75%, or full screen.</p>
            <p>Drag the handle at the top to resize, or swipe down to close.</p>
          </ion-content>
        </ng-template>
      </ion-modal>

      <!-- No Backdrop Dismiss -->
      <ion-list-header>
        <ion-label>No Backdrop Dismiss</ion-label>
      </ion-list-header>
      <ion-button (click)="noBackdropOpen.set(true)">Open (No Backdrop Dismiss)</ion-button>

      <ion-modal
        #noBackdropModal
        [isOpen]="noBackdropOpen()"
        [backdropDismiss]="false"
        (didDismiss)="noBackdropOpen.set(false)"
      >
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Important</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <p>This modal cannot be closed by tapping the backdrop.</p>
            <p>You must use the button below to dismiss it.</p>
            <ion-button expand="block" (click)="noBackdropModal.dismiss()">
              I Acknowledge
            </ion-button>
          </ion-content>
        </ng-template>
      </ion-modal>

      <!-- Scrollable Content -->
      <ion-list-header>
        <ion-label>Scrollable Content</ion-label>
      </ion-list-header>
      <ion-button (click)="scrollOpen.set(true)">Open Scrollable Modal</ion-button>

      <ion-modal #scrollModal [isOpen]="scrollOpen()" (didDismiss)="scrollOpen.set(false)">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Scrollable Modal</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="scrollModal.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              @for (item of scrollItems; track item) {
                <ion-item>
                  <ion-label>{{ item }}</ion-label>
                </ion-item>
              }
            </ion-list>
          </ion-content>
        </ng-template>
      </ion-modal>

    </ion-content>
  `,
})
export class ModalDemo {
  protected readonly basicOpen = signal(false);
  protected readonly sheetOpen = signal(false);
  protected readonly noBackdropOpen = signal(false);
  protected readonly scrollOpen = signal(false);

  protected readonly scrollItems = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
}
