import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from "./order.service";
import {LoginFormService} from "../login-form/login-form.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() totalOrderPrice: number = 0;
  constructor(public orderService: OrderService, public loginService: LoginFormService, public router: Router) { }

  ngOnInit(): void {
  }

  onOrderButtonPressed() {
    this.router.navigate(['/','payment']);
    // if(this.loginService.shopUser !== undefined){
    //   this.router.navigate(['/','payment']);
    // } else {
    //   this.router.navigate(['/','login']);
    // }

  }
}
