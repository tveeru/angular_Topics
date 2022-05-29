import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  constructor() { }
  @Input() appConfirm = () => {};
  @Input() confirmMessage = "";

  @HostListener('click',['$event'])
    confirmFirst(){
      const confirmed =  window.confirm(this.confirmMessage);

      if(confirmed){
        this.appConfirm();
      }
    }


}
