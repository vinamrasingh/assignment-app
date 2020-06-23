import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteOneRoutingModule } from './route-one-routing.module';
import { RouteOneComponent } from './route-one.component';
import { RectangleComponent } from './rectangle/rectangle.component';


@NgModule({
  declarations: [RouteOneComponent, RectangleComponent],
  imports: [
    CommonModule,
    RouteOneRoutingModule
  ]
})
export class RouteOneModule { }
