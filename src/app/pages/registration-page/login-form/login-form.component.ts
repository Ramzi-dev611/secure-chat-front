import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }
  loginForm: FormGroup = new FormGroup({
    'username': new FormControl('', [
      Validators.required
    ]),
    'password': new FormControl('', [
      Validators.required
    ])
  })
  ngOnInit(): void {
  }

  submitLogin(){
    console.log(this.loginForm.value);
  }

}
