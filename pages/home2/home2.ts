import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { HomePage3 } from '../home3/home3';

@Component({
  templateUrl: 'home2.html'
})

export class HomePage2 {
constructor(public navCtrl: NavController) { }

  items = [
    'Route 177',
    'Route 178',
  ];

  itemSelected(item: string) {
  alert("Selected Item" + item);
  this.navCtrl.push(HomePage3);
  }
}
