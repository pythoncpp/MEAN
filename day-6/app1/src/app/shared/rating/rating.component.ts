import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
  // event
  @Output() ratingChanged = new EventEmitter()

  maxStars = [1, 2, 3, 4, 5]

  // attribute
  @Input() rating = 0

  constructor() { }

  ngOnInit() { }

  onClick(star) {
    this.ratingChanged.emit({
      new: star, old: this.rating
    })
  }
}
