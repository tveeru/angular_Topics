import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styles: [
  ]
})
export class OnpushComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profile1: Profile = new Profile('veer','th');
  profile2: Profile = new Profile('chinnu','ravipati');
}
