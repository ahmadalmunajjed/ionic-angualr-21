import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  alertCircleOutline,
  barChartOutline,
  caretDownCircleOutline,
  cardOutline,
  checkboxOutline,
  createOutline,
  listOutline,
  notificationsOutline,
  optionsOutline,
  pricetagOutline,
  pricetagsOutline,
  radioButtonOnOutline,
  syncOutline,
  toggleOutline,
} from 'ionicons/icons';
import { COMPONENT_REGISTRY } from '../shared/component-registry';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  protected readonly components = COMPONENT_REGISTRY;

  constructor() {
    addIcons({
      'alert-circle-outline': alertCircleOutline,
      'bar-chart-outline': barChartOutline,
      'caret-down-circle-outline': caretDownCircleOutline,
      'card-outline': cardOutline,
      'checkbox-outline': checkboxOutline,
      'create-outline': createOutline,
      'list-outline': listOutline,
      'notifications-outline': notificationsOutline,
      'options-outline': optionsOutline,
      'pricetag-outline': pricetagOutline,
      'pricetags-outline': pricetagsOutline,
      'radio-button-on-outline': radioButtonOnOutline,
      'sync-outline': syncOutline,
      'toggle-outline': toggleOutline,
    });
  }
}
