import { Component, OnInit } from '@angular/core';

/* Importing FormGroup and FormControl from angular/forms */

import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employeeForm!: FormGroup;

  constructor(private _fb:FormBuilder){}

ngOnInit(): void {
  /* normal way */
// this.employeeForm = new FormGroup({
//   name: new FormControl(),
//   email: new FormControl(),
//   skill: new FormGroup({
//     skillName: new FormControl(),
//     experience: new FormControl(),
//     Proficiency: new FormControl()
//   })
// })

/*using formbuilder */
this.employeeForm = this._fb.group({
  name: ['', Validators.required],
  email: [''],
  skill: this._fb.group({
    skillName: [''],
    experience: [''],
    Proficiency: ['']

  })
})
}

onSubmit(){
  console.log(this.employeeForm.value);
}

/* Setting values to the form */
onLoadData(){
  /* Set the values */
  this.employeeForm.setValue({
    name: "veeranajaneyulu",
    email: "veer@gmail.com",
    skill: {
      skillName: "Angular",
      experience: 4,
      Proficiency:'Intermediate'
    }
  })

  /* Patch the values */
  this.employeeForm.patchValue({
    name: "thondamalla",
    email: "veerth@gmail.com",
    // skill: {
    //   skillName: "Angular",
    //   experience: 4,
    //   Proficiency:'Intermediate'
    // }
  })

}
}
