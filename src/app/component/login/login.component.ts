import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  newform= new FormGroup({
      firstName: new FormControl('', [Validators.required]  ),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+$')])
  })
  constructor() { 

    // this.newform.setValue({firstName: "Aarthi" , lastName:"Ammagari"})
    // this.newform.controls['firstName'].setValue("keerthi")
  }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.newform.value );
    console.log(this.newform.touched);
  }

  get f():{
     [key: string ] : AbstractControl 
  } {
    return this.newform.controls
  }

  
}
