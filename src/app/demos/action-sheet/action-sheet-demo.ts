import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  archiveOutline,
  closeOutline,
  shareOutline,
  trashOutline,
} from 'ionicons/icons';
import {
  IonActionSheet,
  IonButton,
  IonContent,
  IonLabel,
  IonListHeader,
  IonText,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-action-sheet-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DemoHeader,
    IonActionSheet,
    IonButton,
    IonContent,
    IonLabel,
    IonListHeader,
    IonText,
  ],
  template: `
    <app-demo-header title="Action Sheet" />

    <ion-content class="ion-padding">

      <!-- Basic -->
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-button (click)="basicOpen.set(true)">Open Action Sheet</ion-button>
      <ion-action-sheet
        header="Actions"
        [isOpen]="basicOpen()"
        [buttons]="basicButtons"
        (didDismiss)="basicOpen.set(false)"
      />

      <!-- With Icons -->
      <ion-list-header>
        <ion-label>With Icons</ion-label>
      </ion-list-header>
      <ion-button (click)="iconsOpen.set(true)">Open With Icons</ion-button>
      <ion-action-sheet
        header="Actions"
        [isOpen]="iconsOpen()"
        [buttons]="iconButtons"
        (didDismiss)="iconsOpen.set(false)"
      />

      <!-- Destructive Action -->
      <ion-list-header>
        <ion-label>Destructive Action</ion-label>
      </ion-list-header>
      <ion-button (click)="destructiveOpen.set(true)">Open Destructive</ion-button>
      <ion-action-sheet
        header="Manage Item"
        [isOpen]="destructiveOpen()"
        [buttons]="destructiveButtons"
        (didDismiss)="destructiveOpen.set(false)"
      />

      <!-- With Sub Header -->
      <ion-list-header>
        <ion-label>With Sub Header</ion-label>
      </ion-list-header>
      <ion-button (click)="subHeaderOpen.set(true)">Open With Sub Header</ion-button>
      <ion-action-sheet
        header="Share Photo"
        subHeader="Choose how you'd like to share this photo"
        [isOpen]="subHeaderOpen()"
        [buttons]="subHeaderButtons"
        (didDismiss)="subHeaderOpen.set(false)"
      />

      @if (lastResult()) {
        <p>
          <ion-text color="medium">Last action: {{ lastResult() }}</ion-text>
        </p>
      }

    </ion-content>
  `,
})
export class ActionSheetDemo {
  protected readonly basicOpen = signal(false);
  protected readonly iconsOpen = signal(false);
  protected readonly destructiveOpen = signal(false);
  protected readonly subHeaderOpen = signal(false);
  protected readonly lastResult = signal('');

  constructor() {
    addIcons({ archiveOutline, closeOutline, shareOutline, trashOutline });
  }

  protected readonly basicButtons = [
    {
      text: 'Share',
      handler: () => { this.lastResult.set('Share'); },
    },
    {
      text: 'Archive',
      handler: () => { this.lastResult.set('Archive'); },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => { this.lastResult.set('Cancelled'); },
    },
  ];

  protected readonly iconButtons = [
    {
      text: 'Share',
      icon: 'share-outline',
      handler: () => { this.lastResult.set('Share'); },
    },
    {
      text: 'Archive',
      icon: 'archive-outline',
      handler: () => { this.lastResult.set('Archive'); },
    },
    {
      text: 'Delete',
      icon: 'trash-outline',
      handler: () => { this.lastResult.set('Delete'); },
    },
    {
      text: 'Cancel',
      icon: 'close-outline',
      role: 'cancel',
      handler: () => { this.lastResult.set('Cancelled'); },
    },
  ];

  protected readonly destructiveButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      handler: () => { this.lastResult.set('Deleted'); },
    },
    {
      text: 'Archive',
      handler: () => { this.lastResult.set('Archived'); },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => { this.lastResult.set('Cancelled'); },
    },
  ];

  protected readonly subHeaderButtons = [
    {
      text: 'Copy Link',
      handler: () => { this.lastResult.set('Copy Link'); },
    },
    {
      text: 'Share to Social',
      handler: () => { this.lastResult.set('Share to Social'); },
    },
    {
      text: 'Save to Files',
      handler: () => { this.lastResult.set('Save to Files'); },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => { this.lastResult.set('Cancelled'); },
    },
  ];
}
