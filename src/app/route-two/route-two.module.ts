import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteTwoRoutingModule } from './route-two-routing.module';
import { RouteTwoComponent } from './route-two.component';
import { ProductListHeaderComponent } from './product-list-header/product-list-header.component';
import { ProductListCardsComponent } from './product-list-cards/product-list-cards.component';
import { OrderbyPipePipe } from './orderby-pipe.pipe';


@NgModule({
  declarations: [RouteTwoComponent, ProductListHeaderComponent, ProductListCardsComponent, OrderbyPipePipe],
  imports: [
    CommonModule,
    RouteTwoRoutingModule
  ]
})
export class RouteTwoModule { }
