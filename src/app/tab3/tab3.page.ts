import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCard, IonCardContent, IonItem, IonLabel, 
  IonBadge, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { laptopOutline, rocketOutline, folderOpenOutline, globeOutline, checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCard, IonCardContent, IonItem, IonLabel, 
    IonBadge, IonIcon
  ]
})
export class Tab3Page {
  constructor() {
    // Trocamos o primeiro rocketOutline por laptopOutline
    addIcons({ laptopOutline, rocketOutline, folderOpenOutline, globeOutline, checkmarkCircleOutline });
  }
}