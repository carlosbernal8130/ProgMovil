import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonItem, IonAccordionGroup, IonLabel, IonTabBar, IonTabs, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.page.html',
  styleUrls: ['./educacion.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabs, IonTabBar, IonLabel, IonAccordionGroup, IonItem, IonAccordion, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class EducacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
