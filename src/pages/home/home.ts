import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestPage } from '../../pages/test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTestPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(TestPage);
  }

}
