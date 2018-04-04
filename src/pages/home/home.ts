import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimerPage } from '../timer/timer';
import { IscrizioniPage } from '../iscrizioni/iscrizioni';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTimerPage() {
    this.navCtrl.push(TimerPage);
  }

  goToRegistrazioniPage() {
    this.navCtrl.push(IscrizioniPage);
  }
}
