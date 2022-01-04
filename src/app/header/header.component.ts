import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {LoginService} from "../login/login.service";

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
