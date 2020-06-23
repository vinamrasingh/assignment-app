import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../service/timer-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-counter',
  templateUrl: './timer-counter.component.html',
  styleUrls: ['./timer-counter.component.scss']
})
export class TimerCounterComponent implements OnInit,OnDestroy {
  pausedCounter: number = 0;
  startedCounter: number = 0;
  timerActionSubscription: Subscription;
  constructor(private timerService: TimerService) {
    this.timerActionSubscription = this.timerService.timerAction.subscribe((action) => {
      if (action.func === "paused") {
        this.pausedCounter += 1;
      }
      else if (action.func === "started") {
        this.startedCounter += 1;
      }
      else if (action.func === "reset") {
        this.startedCounter = 0;
        this.pausedCounter = 0;
      }
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.timerActionSubscription.unsubscribe();
  }
}
