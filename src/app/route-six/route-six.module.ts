import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteSixRoutingModule } from './route-six-routing.module';
import { RouteSixComponent } from './route-six.component';
import { ClickboxComponent } from './clickbox/clickbox.component';
import { BoxholderDirective } from './directive/boxholder.directive';


@NgModule({
  declarations: [RouteSixComponent, ClickboxComponent, BoxholderDirective],
  imports: [
    CommonModule,
    RouteSixRoutingModule
  ],
  entryComponents: [
    RouteSixComponent
  ]
})
export class RouteSixModule { }
