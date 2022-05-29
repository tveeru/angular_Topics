import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective implements OnInit{

  @Input('appHideAfter')
   delay = 0;

   @Input('appHideAfterThen')
   placeholder: TemplateRef<any> | null = null

  constructor( private _tr: TemplateRef<any>, private _vcr:ViewContainerRef) {
}

ngOnInit(): void {
    this._vcr.createEmbeddedView(this._tr);
    setTimeout(() => {
      this._vcr.clear();
      if(this.placeholder){
        this._vcr.createEmbeddedView(this.placeholder);
      }
    }, this.delay);
}
}
