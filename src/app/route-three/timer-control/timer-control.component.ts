import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit {
  timerValue = 0;
  timerShow = 0;
  pausedAt = null;
  startAt = null;
  valueAssigned = false;
  timer: any;
  timerStarted = false;
  startedShow = false;
  @Output() timerAction = new EventEmitter<{ func: string, timeStamp: Date }>();
  @Output() timerCount = new EventEmitter<{ timer: any }>();

  constructor() { }

  ngOnInit(): void {
  }
  startPauseTimer() {
    this.timerStarted = !this.timerStarted;
    if (this.timerStarted) {
      this.stopInterval();
      this.startInterval();
    } else {
      this.stopInterval();
      this.timerAction.emit({ func: 'paused', timeStamp: new Date() });
      this.pausedAt = this.timerShow + 1;

    }
  }

  inputChanged(event) {
    this.valueAssigned = false;
    this.timerStarted = false;
    this.timerAction.emit({ func: 'reset', timeStamp: new Date() });
  }
  startInterval() {
    if (this.timerValue > 0 && !this.valueAssigned) {
      this.valueAssigned = true;
      this.timerShow = this.timerValue;
      this.startedShow = false;
    }
    this.stopInterval();

    this.timer = setInterval(() => {
      if (this.timerShow >= 0) {
        this.timerCount.emit({ timer: this.timerShow >= 0 ? this.timerShow : '' });

        if (!this.startedShow) {
          this.timerAction.emit({ func: 'started', timeStamp: new Date() });
          this.startedShow = !this.startedShow;
          this.startAt = this.timerShow;
        }

        this.timerShow -= 1;
        if (this.timerShow === -1) {
          this.timerValue = null;
          this.stopInterval();
          this.timerAction.emit({ func: 'finished', timeStamp: new Date() });
        }
      }
    }, 1000);
  }
  stopInterval() {
    if (this.timer) {
      clearInterval(this.timer);
      this.startedShow = false;
    }
  }
  resetTimer() {
    this.stopInterval();
    this.timerValue = 0;
    this.timerShow = null;
    this.valueAssigned = false;
    this.timerStarted = false;
    this.startAt = null;
    this.pausedAt = null;
    this.timerCount.emit({ timer: this.timerShow > 0 ? this.timerShow : '' });
    this.timerAction.emit({ func: 'reset', timeStamp: new Date() });
  }
}
