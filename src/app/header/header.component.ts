import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "../login/login.service";
import {ShopUserRole} from "../shared/models/shop-user-role.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.makeWelcomeString()
  }
}
