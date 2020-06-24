import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerAction = new EventEmitter<{ func: string, timeStamp: Date }>();
  timerCount = new EventEmitter<{ timer: any }>();
  timerShow = 0;

  constructor() { }
  getTimerShow() {
    return this.timerShow;
  }
  setTimerShow(value) {
    this.timerShow = value;
  }
}
