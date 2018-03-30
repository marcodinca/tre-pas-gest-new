import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { isNumber } from 'ionic-angular/util/util';

@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html'
})
export class TimerPage {
  timerLoopTimeout;
  startTime: Date;
  elapsedSeconds: number;
  elapsedMinutes: number;
  elapsedHours: number;
  risultati: Array<object>;

  pettorale:string; //Legato al valore del field

  constructor(public navCtrl: NavController) {
    this.elapsedSeconds = 0;
    this.elapsedHours = 0;
    this.elapsedMinutes = 0;
    this.risultati = [];

    let savedStartTime = localStorage.getItem('timerStartTime');
    if(savedStartTime) {
        this.startTime = new Date(savedStartTime);
        this.timerLoop();
    }
  }

  startTimer() {
    this.startTime = new Date();
    this.timerLoop();
    localStorage.setItem('timerStartTime', this.startTime.toISOString());
  }

  timerLoop() {
    this.timerLoopTimeout = setTimeout(() => {
        let stepTime = new Date();
        let elapsed = Math.floor((stepTime.getTime() - this.startTime.getTime())/1000);
        this.elapsedHours = Math.floor(elapsed/3600);
        this.elapsedMinutes = Math.floor(elapsed/60);
        this.elapsedSeconds = Math.floor(elapsed%60);
        this.timerLoop();
    }, 500); //ms, indica ogni quanto refreshare il timer.
  }

  stopTimer() {
    clearTimeout(this.timerLoopTimeout);
    localStorage.clear();
    this.elapsedHours = 0;
    this.elapsedMinutes = 0;
    this.elapsedSeconds = 0;
  }

  onKey(event: KeyboardEvent, pettorale:number) { 
    if(event.keyCode === 13) { //Se l'evento è un invio
        this.pettorale = '';
        this.risultati.unshift({
            pettorale: pettorale,
            ore: this.elapsedHours,
            minuti: this.elapsedMinutes,
            secondi: this.elapsedSeconds
        })
    }
  }
}
