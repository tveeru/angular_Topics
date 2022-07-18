import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formGroup-normal',
  templateUrl: './formGroup-normal.component.html',
  styleUrls: ['./formGroup-normal.component.css']
})
export class FormGroupNormalComponent implements OnInit {

  empForm !: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.empForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      country: new FormControl('usa'),
      gender: new FormControl('female'),
      hobbies: new FormControl('sports')
    })
  }

  getDetails(){
    console.log(this.empForm);
  }

  get email() { return this.empForm.get('email'); }

}
