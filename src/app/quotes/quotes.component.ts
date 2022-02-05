import { Component, OnInit } from '@angular/core';
import{Quotes}from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    {id:1,quote:'Life is what happens when you are busy making other plans.' , author:'John Lennon' ,name:'John Lennon'},
    {id:2,quote:'The greatest glory in living lies not in never falling, but in rising every time we fall' , author:'Nelson Mandela' ,name:'Nelson Mandela'},
    {id:3,quote:'Live as if you were to die tomorrow. Learn as if you were to live forever.' , author:'Mahatma Gandhi' ,name:'Mahatma Gandhi'},
    {id:4,quote:'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.' , author:'Bernard M. Baruch' ,name:'Bernard M. Baruch'},
    {id:5,quote:'If life were predictable it would cease to be life, and be without flavor.' , author:'Eleanor Roosevelt' ,name:'Eleanor Roosevelt'},
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
