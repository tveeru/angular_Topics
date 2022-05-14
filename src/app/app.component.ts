import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showIndicator: boolean = false;
  constructor(private _router:Router,private spinner: NgxSpinnerService){
    this._router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){
        //this.showIndicator = true;
        this.spinner.show();

      }
      if(routerEvent instanceof NavigationEnd){
        //this.showIndicator = false;
        this.spinner.hide();
      }

    });
  }


}
