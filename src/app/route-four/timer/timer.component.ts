import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../service/timer-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  timer: any;
  timerCountSubscription
  constructor(private timerService: TimerService) {
    this.timerCountSubscription = this.timerService.timerCount.subscribe((timerValue: { timer: any }) => {
      this.timer = timerValue.timer;
    })
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.timerCountSubscription.unsubscribe();
  }
}
