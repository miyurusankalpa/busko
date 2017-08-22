import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage2 } from '../home2/home2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items1; items2; from2; to2;
  
  constructor(public navCtrl: NavController) {  }

  initializeItems1() {
    this.items1 = [
      'Malabe',
      'Kaduwela'
    ];
  }
  
  initializeItems2() {
	this.items2 = [
      'Malabe',
      'Kaduwela'
    ];
  }
  
  submit() {
    this.navCtrl.push(HomePage2, {
      f: this.from2,
      t: this.to2
    });
  }
    
  itemSelected1(data) {
    this.from2 = data;
	this.items1 = [];
  }
  itemSelected2(data) {
    this.to2 = data;
	this.items2 = [];
  }
  
getItems1(ev) {
	this.initializeItems1();
	var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items1 = this.items1.filter((item1) => {
        return (item1.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
}
getItems2(ev) {
	this.initializeItems2();
	var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items2 = this.items2.filter((item2) => {
        return (item2.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
}

}
