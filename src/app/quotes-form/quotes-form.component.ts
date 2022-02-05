import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import{Quotes} from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {


  newQuote = new Quotes(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quotes>();
  
  // addNewQuote:Quotes | undefined;

  submitQuote(){
    this.addQuote.emit(this.newQuote);
      }
  constructor() { }

  ngOnInit(): void {
  }

}
