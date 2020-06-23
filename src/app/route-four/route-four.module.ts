import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouteFourRoutingModule } from './route-four-routing.module';
import { RouteFourComponent } from './route-four.component';
import { TimerComponent } from './timer/timer.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimerCounterComponent } from './timer-counter/timer-counter.component';
import { TimerTimestampComponent } from './timer-timestamp/timer-timestamp.component';


@NgModule({
  declarations: [RouteFourComponent, TimerComponent, TimerControlComponent, TimerCounterComponent, TimerTimestampComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouteFourRoutingModule
  ]
})
export class RouteFourModule { }
