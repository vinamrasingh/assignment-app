import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list-header',
  templateUrl: './product-list-header.component.html',
  styleUrls: ['./product-list-header.component.scss']
})
export class ProductListHeaderComponent implements OnInit {
  @Output() viewType = new EventEmitter<{ view: String}>();
  @Output() orderBy =  new EventEmitter<{order: String}>();
  order:string="l2h";
  constructor() { }

  ngOnInit(): void {
  }
  gridViewClicked() {
    this.viewType.emit({ view: "grid"});
  }
  listViewClicked() {
    this.viewType.emit({view:"list"});
  }
  arrange(value){
    console.log(value)
    this.orderBy.emit({order:value});
  }
}
