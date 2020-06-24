import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-counter',
  templateUrl: './timer-counter.component.html',
  styleUrls: ['./timer-counter.component.scss']
})
export class TimerCounterComponent implements OnInit {
  @Input() pauseCounter: number;
  @Input() startCounter: number;
  constructor() { }

  ngOnInit(): void {
  }

}
