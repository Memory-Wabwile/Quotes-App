import { Component, Input, OnInit } from '@angular/core';
import{Quotes} from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()quotee: any;
  
  goalDelete(complete:boolean){
    this.isDone.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
