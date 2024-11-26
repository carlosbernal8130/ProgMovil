import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { personCircle,calendar,book,newspaper,people,arrowBackCircle,exit, closeCircle} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [MbscModule, FormsModule, IonApp, IonRouterOutlet],
  
})
export class AppComponent{
  constructor() {
    addIcons({ personCircle,calendar,book,newspaper,people,arrowBackCircle,exit, closeCircle });
  }
  
}
