import { Component, OnInit } from '@angular/core';
import {LoginFormService} from "../login-form/login-form.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginFormService: LoginFormService,public router: Router) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.loginFormService.logOutShopUser();
      this.router.navigate(['/','shop']);
  }
}
