import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimerPage } from '../timer/timer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTimerPage() {
    this.navCtrl.push(TimerPage, {mode: 'COL'});
  }

}
