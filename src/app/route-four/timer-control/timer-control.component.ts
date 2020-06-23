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

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }
  startPauseTimer() {
    this.timerStarted = !this.timerStarted;
    if (this.timerStarted) {
      this.timerService.timerAction.emit({ func: "started", timeStamp: new Date() });
      this.stopInterval();
      this.startInterval();
    } else {
      this.stopInterval();
      this.timerService.timerAction.emit({ func: "paused", timeStamp: new Date() })
    }
  }

  inputChanged(event) {
    console.log(event);
    this.valueAssigned = false;
    this.timerStarted = false;
    this.timerService.timerAction.emit({ func: "reset", timeStamp: new Date() })
  }
  startInterval() {
    if (this.timerValue > 0 && !this.valueAssigned) {
      this.valueAssigned = true;
      this.timerService.setTimerShow(this.timerValue);
    }
    this.stopInterval();
    this.timer = setInterval(() => {
      if (this.timerService.getTimerShow() > 0) {
        this.timerService.setTimerShow(this.timerService.getTimerShow() - 1);
      } else {
        this.timerService.setTimerShow(null)
      }
      console.log(this.timerService.getTimerShow());
      this.timerService.timerCount.emit({ timer: this.timerService.getTimerShow() > 0 ? this.timerService.getTimerShow() : "" })
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
    this.timerService.setTimerShow(0);
    this.valueAssigned = false;
    this.timerStarted = false;
    this.timerService.timerCount.emit({ timer: this.timerService.getTimerShow() > 0 ? this.timerService.getTimerShow() : "" })
    this.timerService.timerAction.emit({ func: "reset", timeStamp: new Date() })
  }
}