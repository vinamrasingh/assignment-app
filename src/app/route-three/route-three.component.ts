import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss']
})
export class RouteThreeComponent implements OnInit {
  timeStamps: { func: string, timeStamp: Date }[] = [];
  pausedCounter = 0;
  startedCounter = 0;
  timerCount: any;

  constructor() { }

  ngOnInit(): void {
  }
  actionOccured(action: { func: string, timeStamp: Date }) {
    this.timeStamps.push({
      func: action.func, timeStamp: action.timeStamp
    });
    if (action.func === 'paused') {
      this.pausedCounter += 1;
    }
    else if (action.func === 'started') {
      this.startedCounter += 1;
    }
    else if (action.func === 'reset') {
      this.pausedCounter = 0;
      this.startedCounter = 0;
      this.timeStamps = [];
    }
  }
  timerCounter(timerValue: { timer: any }) {
    this.timerCount = timerValue.timer;
  }
}
