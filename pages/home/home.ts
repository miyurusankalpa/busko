import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage2 } from '../home2/home2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items;

  constructor(public navCtrl: NavController) {
  }

  initializeItems() {
    this.items = [
      'Malabe',
      'Kaduwela'
    ];
  }

  submit() {
    this.navCtrl.push(HomePage2);
  }

/*  itemSelected(item: string) {
    console.log("Selected Item", item);
  }*/

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
