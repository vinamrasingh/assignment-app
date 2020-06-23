import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clickbox',
  templateUrl: './clickbox.component.html',
  styleUrls: ['./clickbox.component.scss']
})
export class ClickboxComponent implements OnInit {
  @Input() counter: number;
  @Output() alert = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onClickAlert() {
    this.alert.emit();
  }
}
