import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { isNumber } from 'ionic-angular/util/util';

@Component({
  selector: 'page-iscrizioni',
  templateUrl: 'iscrizioni.html'
})
export class IscrizioniPage {

    is4km: boolean;
    is9km: boolean;
    dataNascita: string;

    constructor(public navCtrl: NavController) {
        this.is4km = false;
        this.is9km = true;
    }

    toggleRace() {
        this.is4km = !this.is4km;
        this.is9km = !this.is9km;
    }
}
