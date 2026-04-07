import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IonButton,
  IonButtons,
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
  logoAndroid,
  logoApple,
  moonOutline,
  notificationsOutline,
  optionsOutline,
  pricetagOutline,
  pricetagsOutline,
  radioButtonOnOutline,
  sunnyOutline,
  syncOutline,
  toggleOutline,
} from 'ionicons/icons';
import { COMPONENT_REGISTRY } from '../shared/component-registry';
import { PlatformThemeService } from '../shared/platform-theme.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonButton,
    IonButtons,
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
  protected readonly themeService = inject(PlatformThemeService);

  constructor() {
    addIcons({
      'alert-circle-outline': alertCircleOutline,
      'bar-chart-outline': barChartOutline,
      'caret-down-circle-outline': caretDownCircleOutline,
      'card-outline': cardOutline,
      'checkbox-outline': checkboxOutline,
      'create-outline': createOutline,
      'list-outline': listOutline,
      'logo-android': logoAndroid,
      'logo-apple': logoApple,
      'moon-outline': moonOutline,
      'notifications-outline': notificationsOutline,
      'options-outline': optionsOutline,
      'pricetag-outline': pricetagOutline,
      'pricetags-outline': pricetagsOutline,
      'radio-button-on-outline': radioButtonOnOutline,
      'sunny-outline': sunnyOutline,
      'sync-outline': syncOutline,
      'toggle-outline': toggleOutline,
    });
  }
}
