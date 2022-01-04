import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {LoginFormService} from "../login-form/login-form.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginFormService) { }

  ngOnInit(): void {
    this.loginService.makeWelcomeString()
  }
}
