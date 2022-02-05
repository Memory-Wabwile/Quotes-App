import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes (1,'Life is what happens when you are busy making other plans.' , 'John Lennon' ,'John Lennon'),
    new Quotes(2,'The greatest glory in living lies not in never falling, but in rising every time we fall' , 'Nelson Mandela' ,'Nelson Mandela'),
    new Quotes(3,'Live as if you were to die tomorrow. Learn as if you were to live forever.' , 'Mahatma Gandhi' ,'Mahatma Gandhi'),
    new Quotes (4,'Be who you are and say what you feel, because those who mind don not matter and those who matter do not mind.' , 'Bernard M. Baruch' ,'Bernard M. Baruch'),
    new Quotes(5,'If life were predictable it would cease to be life, and be without flavor.' , 'Eleanor Roosevelt' ,'Eleanor Roosevelt'),
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
