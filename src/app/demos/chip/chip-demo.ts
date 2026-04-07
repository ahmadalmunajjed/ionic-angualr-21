import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonChip,
  IonContent,
  IonIcon,
  IonLabel,
  IonListHeader,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircle, pin, heart } from 'ionicons/icons';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-chip-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonChip, IonContent, IonIcon, IonLabel, IonListHeader, DemoHeader],
  template: `
    <app-demo-header title="Chip" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-chip>
          <ion-label>Default</ion-label>
        </ion-chip>
        <ion-chip>
          <ion-label>Outline</ion-label>
        </ion-chip>
      </div>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-chip color="primary">
          <ion-label>Primary</ion-label>
        </ion-chip>
        <ion-chip color="secondary">
          <ion-label>Secondary</ion-label>
        </ion-chip>
        <ion-chip color="tertiary">
          <ion-label>Tertiary</ion-label>
        </ion-chip>
        <ion-chip color="success">
          <ion-label>Success</ion-label>
        </ion-chip>
        <ion-chip color="warning">
          <ion-label>Warning</ion-label>
        </ion-chip>
        <ion-chip color="danger">
          <ion-label>Danger</ion-label>
        </ion-chip>
      </div>

      <ion-list-header>
        <ion-label>With Icons</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-chip>
          <ion-icon name="pin" aria-hidden="true" />
          <ion-label>Location</ion-label>
        </ion-chip>
        <ion-chip color="danger">
          <ion-icon name="heart" aria-hidden="true" />
          <ion-label>Favorite</ion-label>
        </ion-chip>
      </div>

      <ion-list-header>
        <ion-label>Closable</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        @for (tag of visibleTags(); track tag) {
          <ion-chip (click)="removeTag(tag)">
            <ion-label>{{ tag }}</ion-label>
            <ion-icon name="close-circle" aria-hidden="true" />
          </ion-chip>
        }
        @if (visibleTags().length === 0) {
          <p>All chips removed!</p>
        }
      </div>

      <ion-list-header>
        <ion-label>Disabled</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-chip [disabled]="true">
          <ion-label>Disabled</ion-label>
        </ion-chip>
      </div>
    </ion-content>
  `,
})
export class ChipDemo {
  protected readonly visibleTags = signal(['Angular', 'Ionic', 'TypeScript', 'Capacitor']);

  constructor() {
    addIcons({ pin, heart, 'close-circle': closeCircle });
  }

  protected removeTag(tag: string): void {
    this.visibleTags.update((tags) => tags.filter((t) => t !== tag));
  }
}
