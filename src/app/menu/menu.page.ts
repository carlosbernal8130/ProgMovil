import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonTabs, IonTabBar, IonTabButton, IonIcon, IonTab, IonFooter } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonFooter, IonTab, IonIcon, IonTabButton, IonTabBar, IonTabs, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
