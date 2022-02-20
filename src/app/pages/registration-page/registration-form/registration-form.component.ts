import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit, DoCheck {

  userSure: boolean = false;
  passwordRepeated: boolean = true;
  registrationForm: FormGroup = new FormGroup({
    'username': new FormControl('', [
      Validators.required
    ]),
    'email': new FormControl('', [
      Validators.required
    ]),
    'password': new FormControl('', [
      Validators.required
    ]),
    'repeatedPassword': new FormControl('', [
      Validators.required
    ]),
  })
  constructor() { }
  
  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.passwordRepeated = this.registrationForm.get('password')?.value === this.registrationForm.get('repeatedPassword')?.value
  }

  userCheckSure(){
    this.userSure = ! this.userSure
  }
  
  submitRegistration(){
    console.log(this.registrationForm.value);
  }

}
