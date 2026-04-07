import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonLabel,
  IonListHeader,
  IonProgressBar,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-progress-bar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonButton, IonContent, IonLabel, IonListHeader, IonProgressBar, DemoHeader],
  template: `
    <app-demo-header title="Progress Bar" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Determinate</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-progress-bar [value]="0.25" />
        <p>25%</p>
        <ion-progress-bar [value]="0.5" />
        <p>50%</p>
        <ion-progress-bar [value]="0.75" />
        <p>75%</p>
        <ion-progress-bar [value]="1" />
        <p>100%</p>
      </div>

      <ion-list-header>
        <ion-label>Indeterminate</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-progress-bar type="indeterminate" />
      </div>

      <ion-list-header>
        <ion-label>Buffer</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-progress-bar [value]="0.3" [buffer]="0.6" />
        <p>Value: 30% / Buffer: 60%</p>
      </div>

      <ion-list-header>
        <ion-label>Colors</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-progress-bar color="primary" [value]="0.6" />
        <p>Primary</p>
        <ion-progress-bar color="secondary" [value]="0.6" />
        <p>Secondary</p>
        <ion-progress-bar color="success" [value]="0.6" />
        <p>Success</p>
        <ion-progress-bar color="warning" [value]="0.6" />
        <p>Warning</p>
        <ion-progress-bar color="danger" [value]="0.6" />
        <p>Danger</p>
      </div>

      <ion-list-header>
        <ion-label>Interactive</ion-label>
      </ion-list-header>
      <div class="ion-padding">
        <ion-progress-bar [value]="progress()" />
        <p>{{ (progress() * 100).toFixed(0) }}%</p>
        <ion-button size="small" (click)="decrement()">-10%</ion-button>
        <ion-button size="small" (click)="increment()">+10%</ion-button>
        <ion-button size="small" color="medium" (click)="progress.set(0)">Reset</ion-button>
      </div>
    </ion-content>
  `,
  styles: `
    ion-progress-bar {
      margin-block-end: 4px;
    }
    p {
      margin-block: 4px 16px;
      font-size: 13px;
      color: var(--ion-color-medium);
    }
  `,
})
export class ProgressBarDemo {
  protected readonly progress = signal(0.3);

  protected increment(): void {
    this.progress.update((v) => Math.min(1, v + 0.1));
  }

  protected decrement(): void {
    this.progress.update((v) => Math.max(0, v - 0.1));
  }
}
