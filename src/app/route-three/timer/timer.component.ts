import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() timer: any;
  constructor() { }
  ngOnInit(): void {
  }
}
