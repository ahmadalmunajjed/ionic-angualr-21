import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonLabel,
  IonListHeader,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-card-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonLabel,
    IonListHeader,
    DemoHeader,
  ],
  template: `
    <app-demo-header title="Card" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Here's a small text description for the card content.
          Nothing more, nothing less.
        </ion-card-content>
      </ion-card>

      <ion-list-header>
        <ion-label>With Actions</ion-label>
      </ion-list-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Actions Card</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          This card has action buttons below the content area.
        </ion-card-content>
        <div class="ion-padding-horizontal ion-padding-bottom">
          <ion-button fill="clear">Action 1</ion-button>
          <ion-button fill="clear">Action 2</ion-button>
        </div>
      </ion-card>

      <ion-list-header>
        <ion-label>Header Only</ion-label>
      </ion-list-header>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Destination</ion-card-subtitle>
          <ion-card-title>Madison, WI</ion-card-title>
        </ion-card-header>
      </ion-card>

      <ion-list-header>
        <ion-label>Content Only</ion-label>
      </ion-list-header>
      <ion-card>
        <ion-card-content>
          A simple card with only content and no header section.
        </ion-card-content>
      </ion-card>

      <ion-list-header>
        <ion-label>Button Card</ion-label>
      </ion-list-header>
      <ion-card button="true">
        <ion-card-header>
          <ion-card-title>Clickable Card</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          This entire card is clickable.
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
})
export class CardDemo {}
