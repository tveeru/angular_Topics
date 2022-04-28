import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getMessage();
  }
  userName: string='';
  today: number = Date.now();
  greetMessage: string = "";

  messageList: Array<string> = [
    "Hello there",
    "How are you doing",
    "Happy days are to stay there forever",
    "flowers are so beautiful as you",
    "inspire one's soul"
  ]


  getMessage(){
    this.greetMessage = this.messageList[Math.floor(Math.random() * this.messageList.length)];
    console.log(this.greetMessage);
  }
}
