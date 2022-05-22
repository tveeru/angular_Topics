import { Component, OnInit } from '@angular/core';

/* Importing FormGroup and FormControl from angular/forms */

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employeeForm!: FormGroup;

ngOnInit(): void {
this.employeeForm = new FormGroup({
  name: new FormControl(),
  email: new FormControl(),
  skill: new FormGroup({
    skillName: new FormControl(),
    experience: new FormControl(),
    Proficiency: new FormControl()
  })
})
}

onSubmit(){
  console.log(this.employeeForm.value);
}
}
