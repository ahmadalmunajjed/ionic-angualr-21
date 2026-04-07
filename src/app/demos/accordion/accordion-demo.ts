import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { DemoHeader } from '../../shared/demo-header';

@Component({
  selector: 'app-accordion-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel,
    IonList, IonListHeader, DemoHeader,
  ],
  template: `
    <app-demo-header title="Accordion" />

    <ion-content class="ion-padding">
      <ion-list-header>
        <ion-label>Basic</ion-label>
      </ion-list-header>
      <ion-accordion-group>
        <ion-accordion value="first">
          <ion-item slot="header" color="light">
            <ion-label>First Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Content for the first accordion item. This section is collapsible.
          </div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header" color="light">
            <ion-label>Second Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Content for the second accordion item. Only one section can be open at a time.
          </div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header" color="light">
            <ion-label>Third Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Content for the third accordion item.
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <ion-list-header>
        <ion-label>Multiple Open</ion-label>
      </ion-list-header>
      <ion-accordion-group [multiple]="true">
        <ion-accordion value="colors">
          <ion-item slot="header" color="light">
            <ion-label>Colors</ion-label>
          </ion-item>
          <ion-list slot="content">
            <ion-item>
              <ion-label>Red</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Green</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Blue</ion-label>
            </ion-item>
          </ion-list>
        </ion-accordion>
        <ion-accordion value="shapes">
          <ion-item slot="header" color="light">
            <ion-label>Shapes</ion-label>
          </ion-item>
          <ion-list slot="content">
            <ion-item>
              <ion-label>Circle</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Square</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Triangle</ion-label>
            </ion-item>
          </ion-list>
        </ion-accordion>
      </ion-accordion-group>

      <ion-list-header>
        <ion-label>Default Open</ion-label>
      </ion-list-header>
      <ion-accordion-group value="open">
        <ion-accordion value="open">
          <ion-item slot="header" color="light">
            <ion-label>Open by Default</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            This accordion starts in the open state.
          </div>
        </ion-accordion>
        <ion-accordion value="closed">
          <ion-item slot="header" color="light">
            <ion-label>Closed by Default</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            This accordion starts closed.
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <ion-list-header>
        <ion-label>Readonly</ion-label>
      </ion-list-header>
      <ion-accordion-group [readonly]="true" value="readonly">
        <ion-accordion value="readonly">
          <ion-item slot="header" color="light">
            <ion-label>Readonly (open)</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            This accordion cannot be toggled by the user.
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <ion-list-header>
        <ion-label>Disabled</ion-label>
      </ion-list-header>
      <ion-accordion-group [disabled]="true">
        <ion-accordion value="disabled">
          <ion-item slot="header" color="light">
            <ion-label>Disabled Accordion</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            This content is not reachable.
          </div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-content>
  `,
})
export class AccordionDemo {}
