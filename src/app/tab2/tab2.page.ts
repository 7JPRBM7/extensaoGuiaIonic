import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCard, IonCardContent, IonItem, IonLabel, 
  IonIcon, IonBadge 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoNodejs, codeWorkingOutline, terminalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCard, IonCardContent, IonItem, IonLabel, 
    IonIcon, IonBadge
  ]
})
export class Tab2Page {
  constructor() {
    addIcons({ logoNodejs, codeWorkingOutline, terminalOutline });
  }
}