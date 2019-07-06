import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  mycolor = 'green'

  constructor() { }

  changeColor(color) {
    this.mycolor = color
  }

  ngOnInit() {
  }

}
