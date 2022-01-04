import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Form} from "@angular/forms";
import {LoginService} from "./login.service";
import {LoginRequest} from "../shared/models/login.request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode = true;
  errorMessage!: string;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLoginShopUser(loginForm: NgForm) {
    if (!loginForm.valid) return;
    let loginRequest = new LoginRequest(loginForm.value.email, loginForm.value.password);
    this.loginService.loginShopUser(loginRequest);
    this.loginService.makeWelcomeString();
  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
