import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'home3.html'
})

export class HomePage3 {
route;
constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.route = navParams.get('r');
}
min = Math.floor(Math.random() * 10) + 1;

  update() {
    this.min = Math.floor(Math.random() * 6) + 1; 
  }
}
