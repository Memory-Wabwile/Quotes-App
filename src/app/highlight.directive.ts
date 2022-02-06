import { Directive ,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='highlight';
   }

   @Input() defaultColor = '';
 
   @Input() appHighlight = '';
 
   @HostListener("") upVote() {
    this.highlight(this.appHighlight || this.defaultColor || 'grey');
  }

  @HostListener("") downVote() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
