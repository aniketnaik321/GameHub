import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonAvatar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonCardContent, IonCard, IonCol, IonRow, IonAvatar, IonButtons, IonIcon, IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule, IonButton, IonAvatar, IonGrid]
})
export class HomePage implements OnInit {
    ngOnInit(): void {
    //  throw new Error('Method not implemented.');
    }

    games = [
      { title: 'POINTS', players: 3455, class: 'points' },
      { title: '101 POOL', players: 8562, class: 'pool-101' },
      { title: 'DEALS', players: 4733, class: 'deals' },
      { title: '61 POOL', players: 2550, class: 'pool-61' },
      { title: '201 POOL', players: 5801, class: 'pool-201' },
    ];
  
    onNotificationClick() {
      console.log('Notification icon clicked');
    }
  
    onMessagingClick() {
      console.log('Messaging icon clicked');
    }
  
    onProfileClick() {
      console.log('Profile icon clicked');
    }
  }


