import { Directive ,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='highlight';
   }

  //  @Input() defaultColor = '';
 
  //  @Input() appHighlight = '';
 
  //  @HostListener("click") upVote() {
  //   this.highlight();
  // }

//  highlight(){
//     let array:number[]=[];
// this.appHighlight.quote.forEach((quote:any) =>
// quote.appHighlightLiked = false
// array.push(quote.upVotes)
// )
 }
  // private highlight(color: string) {
  //   this.elem.nativeElement.style.backgroundColor = color;
  // }
  // let max=Math.max(...array)
  // let i = array.indexOf(max)
  // this.appHighlight.quote[i].appHighlightLiked = true;

//   ngOnInit(){}
// }
// }
