import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      1,
      'Life is what happens when you are busy making other plans.',
      'John Lennon',
      'Samantha Tore',
      new Date(2020, 8, 10)
    ),
    new Quotes(
      2,
      'The greatest glory in living lies not in never falling, but in rising every time we fall',
      'Nelson Mandela',
      'Elvis Macharia',
      new Date(2021, 12, 12)
    ),
    new Quotes(
      3,
      'Live as if you were to die tomorrow. Learn as if you were to live forever.',
      'Mahatma Gandhi',
      'Namalwa Jhones',
      new Date(2022, 1, 1)
    ),
    new Quotes(
      4,
      'Be who you are and say what you feel, because those who mind don not matter and those who matter do not mind.',
      'Bernard M. Baruch',
      'Bernard M. Baruch',
      new Date(2021, 6, 5)
    ),
    new Quotes(
      5,
      'If life were predictable it would cease to be life, and be without flavor.',
      'Eleanor Roosevelt',
      'Rose Natalie',
      new Date(2019, 2, 1)
    ),
  ];

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isDone: any, index:any) {
    if (isDone) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].author}'s quote?`
      );

      if (toDelete) {
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
