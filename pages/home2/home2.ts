import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage3 } from '../home3/home3';

@Component({
  templateUrl: 'home2.html'
})

export class HomePage2 {
to2; from2;
constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.from2 = navParams.get('f');
	this.to2 = navParams.get('t');	
}

  items = [
    'Route 177',
    'Route 178',
  ];
  	  
  itemSelected(item: string) {
	this.navCtrl.push(HomePage3, {
      r: item
	  });
  }
}