import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerAction = new EventEmitter<{ func: String, timeStamp: Date }>();
  timerCount = new EventEmitter<{ timer: any }>();
  timerShow: number = 0;

  constructor() { }
  getTimerShow() {
    return this.timerShow;
  }
  setTimerShow(value) {
    this.timerShow = value;
  }
}
