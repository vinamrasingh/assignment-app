import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-cards',
  templateUrl: './product-list-cards.component.html',
  styleUrls: ['./product-list-cards.component.scss']
})
export class ProductListCardsComponent implements OnInit {
  @Input() product: any;
  @Input() viewClass: string;
  constructor() { }

  ngOnInit(): void {
  }

}
