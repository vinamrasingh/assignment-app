import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../service/timer-service.service';

@Component({
  selector: 'app-timer-timestamp',
  templateUrl: './timer-timestamp.component.html',
  styleUrls: ['./timer-timestamp.component.scss']
})
export class TimerTimestampComponent implements OnInit, OnDestroy {
  timeStamps: { func: string, timeStamp: Date }[] = [];
  timerActionSubscription: Subscription;
  constructor(private timerService: TimerService) {
    this.timerActionSubscription = this.timerService.timerAction.subscribe(
      (action: { func: String, timeStamp: Date }) => {
        this.actionOccured(action);
      }
    );
  }

  actionOccured(action) {
    this.timeStamps.push({
      func: action.func, timeStamp: action.timeStamp
    });
    if (action.func === "reset") {
      this.timeStamps = [];
    }
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.timerActionSubscription.unsubscribe();
  }
}
