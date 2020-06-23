import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  getWidth(count) {

    return 100 - (count * 10);
  }
  getHeight(count) {

    return 100 - (count * 10);
  }
}
