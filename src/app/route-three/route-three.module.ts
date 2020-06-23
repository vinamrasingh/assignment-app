import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouteThreeRoutingModule } from './route-three-routing.module';
import { RouteThreeComponent } from './route-three.component';
import { TimerComponent } from './timer/timer.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimerTimestampComponent } from './timer-timestamp/timer-timestamp.component';
import { TimerCounterComponent } from './timer-counter/timer-counter.component';


@NgModule({
  declarations: [RouteThreeComponent, TimerComponent, TimerControlComponent, TimerTimestampComponent, TimerCounterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouteThreeRoutingModule
  ]
})
export class RouteThreeModule { }
