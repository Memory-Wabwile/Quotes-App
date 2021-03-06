import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotee: any;

  @Output() isDone = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isDone.emit(complete);
  }

  // For counting likes

  upVotes: number = 0;
  upVoteButtonClick() {
    this.upVotes++;
  }

  // For counting dislikes
  downVotes: number = 0;
  downVoteButtonClick() {
    this.downVotes++;
  }
  constructor() {}

  ngOnInit(): void {}
}
