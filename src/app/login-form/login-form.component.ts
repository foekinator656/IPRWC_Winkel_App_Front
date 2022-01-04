import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Form} from "@angular/forms";
import {LoginFormService} from "./login-form.service";
import {LoginRequest} from "../shared/models/login.request";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isLoginMode = true;
  errorMessage!: string;

  constructor(public loginService: LoginFormService) { }

  ngOnInit(): void {
  }

  onLoginShopUser(loginForm: NgForm) {
    // if (!loginForm.valid) return;
    // let loginRequest = new LoginRequest(loginForm.value.email, loginForm.value.password);
    let loginRequest = new LoginRequest("SysAdmin@users.com", "sysadmin");
    this.loginService.loginShopUser(loginRequest);
    this.loginService.makeWelcomeString();
  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
