import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private _er: ElementRef) {
    this._er.nativeElement.style.backgroundColor = "red";
    this._er.nativeElement.style.color = "white";

  }

}
