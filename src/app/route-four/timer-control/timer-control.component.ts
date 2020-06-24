import { Component, OnInit } from '@angular/core';
import { TimerService } from '../service/timer-service.service';

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
  startedShow: boolean = false;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }
  startPauseTimer() {
    this.timerStarted = !this.timerStarted;
    if (this.timerStarted) {
      this.stopInterval();
      this.startInterval();
    } else {
      this.stopInterval();
      this.timerService.timerAction.emit({ func: "paused", timeStamp: new Date() })
    }
  }

  inputChanged(event) {
    this.valueAssigned = false;
    this.timerStarted = false;
    this.timerService.timerAction.emit({ func: "reset", timeStamp: new Date() })
  }
  startInterval() {
    if (this.timerValue > 0 && !this.valueAssigned) {
      this.valueAssigned = true;
      this.timerService.setTimerShow(this.timerValue);
      this.startedShow = false;
    }
    this.stopInterval();
    this.timer = setInterval(() => {
      if (this.timerService.getTimerShow() >= 0) {
        this.timerService.timerCount.emit({ timer: this.timerService.getTimerShow() >= 0 ? this.timerService.getTimerShow() : "" });
        if (!this.startedShow) {
          this.timerService.timerAction.emit({ func: "started", timeStamp: new Date() });
          this.startedShow = !this.startedShow;
        }
        this.timerService.setTimerShow(this.timerService.getTimerShow() - 1);
        if (this.timerService.getTimerShow() == -1) {
          this.timerValue = null;
          this.stopInterval();
          this.timerService.timerAction.emit({ func: "finished", timeStamp: new Date() });
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
    this.timerService.setTimerShow(0);
    this.valueAssigned = false;
    this.timerStarted = false;
    this.timerService.timerCount.emit({ timer: this.timerService.getTimerShow() > 0 ? this.timerService.getTimerShow() : "" })
    this.timerService.timerAction.emit({ func: "reset", timeStamp: new Date() })
  }
}