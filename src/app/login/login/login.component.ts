import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = false;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private service: LoginService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], //Validators.pattern()
    });
  }

  login() {

    let {login, password} = this.loginForm.value;
    this.service.login(login, password).subscribe((resp) =>{
      console.log(resp);
    })

  }
}
