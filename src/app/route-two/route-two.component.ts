import { Component, OnInit } from '@angular/core';
import * as products from "./products.json";

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {
  productList: any = (products as any).default;
  viewClass: string = "col-sm-3";
  order: string = "l2h"

  constructor() { }

  ngOnInit(): void {

  }
  changeView(viewType: { view: String }) {
    if (viewType.view == "grid") {
      this.viewClass = "col-sm-3";
    } else if (viewType.view == "list") {
      this.viewClass = "col-sm-6";
    }
  }
  orderBy(orderBy: { order: string }) {
    this.order = orderBy.order;
  }

}
