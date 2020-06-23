import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFiveRoutingModule } from './route-five-routing.module';
import { RouteFiveComponent } from './route-five.component';
import { StudentComponent } from './student/student.component';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [RouteFiveComponent, StudentComponent, SortByPipe],
  imports: [
    CommonModule,
    RouteFiveRoutingModule
  ]
})
export class RouteFiveModule { }
