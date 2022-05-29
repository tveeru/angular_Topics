import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  visitRange(){
    location.href = "https://angular-training-guide.rangle.io/advanced-angular/directives/creating_an_attribute_directive";
  }
}
