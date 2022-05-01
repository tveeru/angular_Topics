import { Component, OnInit,Input } from '@angular/core';
import { Profile } from '../profile.model';
@Component({
  selector: 'app-DefaultChangeDetectionComponent',
  templateUrl: './DefaultChangeDetectionComponent.component.html',
  styleUrls: ['./DefaultChangeDetectionComponent.component.css']
})
export class DefaultChangeDetectionComponentComponent implements OnInit {

  @Input() profile?:Profile;
  constructor() { }

  ngOnInit() {
  }

}
