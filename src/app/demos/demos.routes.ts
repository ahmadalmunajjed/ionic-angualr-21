import { Routes } from '@angular/router';

export const DEMO_ROUTES: Routes = [
  {
    path: 'accordion',
    loadComponent: () =>
      import('./accordion/accordion-demo').then((m) => m.AccordionDemo),
  },
  {
    path: 'alert',
    loadComponent: () =>
      import('./alert/alert-demo').then((m) => m.AlertDemo),
  },
  {
    path: 'badge',
    loadComponent: () =>
      import('./badge/badge-demo').then((m) => m.BadgeDemo),
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./button/button-demo').then((m) => m.ButtonDemo),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./card/card-demo').then((m) => m.CardDemo),
  },
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./checkbox/checkbox-demo').then((m) => m.CheckboxDemo),
  },
  {
    path: 'chip',
    loadComponent: () =>
      import('./chip/chip-demo').then((m) => m.ChipDemo),
  },
  {
    path: 'input',
    loadComponent: () =>
      import('./input/input-demo').then((m) => m.InputDemo),
  },
  {
    path: 'progress-bar',
    loadComponent: () =>
      import('./progress-bar/progress-bar-demo').then(
        (m) => m.ProgressBarDemo,
      ),
  },
  {
    path: 'radio',
    loadComponent: () =>
      import('./radio/radio-demo').then((m) => m.RadioDemo),
  },
  {
    path: 'range',
    loadComponent: () =>
      import('./range/range-demo').then((m) => m.RangeDemo),
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./select/select-demo').then((m) => m.SelectDemo),
  },
  {
    path: 'spinner',
    loadComponent: () =>
      import('./spinner/spinner-demo').then((m) => m.SpinnerDemo),
  },
  {
    path: 'toast',
    loadComponent: () =>
      import('./toast/toast-demo').then((m) => m.ToastDemo),
  },
  {
    path: 'toggle',
    loadComponent: () =>
      import('./toggle/toggle-demo').then((m) => m.ToggleDemo),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
