import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-timestamp',
  templateUrl: './timer-timestamp.component.html',
  styleUrls: ['./timer-timestamp.component.scss']
})
export class TimerTimestampComponent implements OnInit {
  @Input() timeStamp:{func:string,timeStamp:Date};
  constructor() { }

  ngOnInit(): void {
  }

}
