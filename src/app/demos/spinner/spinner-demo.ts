import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonContent,
  IonLabel,
  IonListHeader,
  IonSpinner,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-spinner-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonLabel, IonListHeader, IonSpinner, DemoHeader],
  template: `
    <app-demo-header title="Spinner" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Spinner Types</ion-label>
      </ion-list-header>
      <div class="spinner-grid">
        @for (name of spinnerNames; track name) {
          <div class="spinner-item">
            <ion-spinner [name]="name" />
            <span>{{ name }}</span>
          </div>
        }
      </div>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <div class="spinner-grid">
        <div class="spinner-item">
          <ion-spinner color="primary" />
          <span>Primary</span>
        </div>
        <div class="spinner-item">
          <ion-spinner color="secondary" />
          <span>Secondary</span>
        </div>
        <div class="spinner-item">
          <ion-spinner color="tertiary" />
          <span>Tertiary</span>
        </div>
        <div class="spinner-item">
          <ion-spinner color="success" />
          <span>Success</span>
        </div>
        <div class="spinner-item">
          <ion-spinner color="warning" />
          <span>Warning</span>
        </div>
        <div class="spinner-item">
          <ion-spinner color="danger" />
          <span>Danger</span>
        </div>
      </div>

      <ion-list-header>
        <ion-label>Paused</ion-label>
      </ion-list-header>
      <div class="spinner-grid">
        <div class="spinner-item">
          <ion-spinner [paused]="true" />
          <span>Paused</span>
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    .spinner-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 16px;
    }
    .spinner-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .spinner-item span {
      font-size: 12px;
      color: var(--ion-color-medium);
    }
  `,
})
export class SpinnerDemo {
  protected readonly spinnerNames = [
    'bubbles',
    'circles',
    'circular',
    'crescent',
    'dots',
    'lines',
    'lines-sharp',
    'lines-small',
    'lines-sharp-small',
  ] as const;
}
