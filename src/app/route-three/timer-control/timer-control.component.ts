import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit {
  timerValue: number = 0;
  timerShow: number = 0;
  valueAssigned: boolean = false;
  timer: any;
  timerStarted: boolean = false;
  @Output() timerAction = new EventEmitter<{ func: String, timeStamp: Date }>();
  @Output() timerCount = new EventEmitter<{ timer: any }>();


  constructor() { }

  ngOnInit(): void {
  }
  startPauseTimer() {
    this.timerStarted = !this.timerStarted;
    if (this.timerStarted) {
      this.timerAction.emit({ func: "started", timeStamp: new Date() });
      this.stopInterval();
      this.startInterval();
    } else {
      this.stopInterval();
      this.timerAction.emit({ func: "paused", timeStamp: new Date() })
    }
  }

  inputChanged(event) {
    console.log(event);
    this.valueAssigned = false;
    this.timerStarted = false;
    this.timerAction.emit({ func: "reset", timeStamp: new Date() })
  }
  startInterval() {
    if (this.timerValue > 0 && !this.valueAssigned) {
      this.valueAssigned = true;
      this.timerShow = this.timerValue;
    }
    this.stopInterval();
    this.timer = setInterval(() => {
      if (this.timerShow > 0) {
        this.timerShow -= 1;
      } else {
        this.timerShow = null
      }
      console.log(this.timerShow);
      this.timerCount.emit({ timer: this.timerShow > 0 ? this.timerShow : "" })
    }, 1000);
  }
  stopInterval() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  resetTimer() {
    this.stopInterval();
    this.timerValue = 0;
    this.timerShow = null;
    this.valueAssigned = false;
    this.timerStarted = false;
    this.timerCount.emit({ timer: this.timerShow > 0 ? this.timerShow : "" })
    this.timerAction.emit({ func: "reset", timeStamp: new Date() })
  }
}