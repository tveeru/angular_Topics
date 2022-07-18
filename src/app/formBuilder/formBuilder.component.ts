import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formBuilder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FormBuilderComponent implements OnInit {

  empForm !: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.empForm = this._fb.group({
      email: ['', Validators.required],
      password: ['']

    })

  }

  onSubmit(){
    console.log(this.empForm.value);
  }

}
