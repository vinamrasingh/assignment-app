import { Component, OnInit } from '@angular/core';
import * as students from "./students.json";

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss']
})
export class RouteFiveComponent implements OnInit {
  studentList: any = (students as any).default;
  constructor() { }
  category: string = "";
  order: string = "";
  currentOrderClick = 0;
  originalList = Object.assign([], this.studentList);
  ngOnInit(): void {
  }
  sortBy(value) {
    console.log(value)
    if (value) {
      value = value.toLowerCase();
      if (value !== this.category) {
        this.currentOrderClick = 1;
        this.category = value;
        this.order = "asc";
      } else {
        this.currentOrderClick += 1;
        if (this.currentOrderClick == 2) {
          this.order = "desc";
        }
        else if (this.currentOrderClick > 2) {
          this.order = "";
          this.category = "";
          this.currentOrderClick = 0;
          this.studentList = Object.assign([], this.originalList);
        }
      }
    }
  }
  getKeys() {
    if (this.studentList.length > 0) {
      return Object.keys(this.studentList[0]);
    }
  }
}
