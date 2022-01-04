import { Component, OnInit } from '@angular/core';
import {LoginFormService} from "../login-form/login-form.service";
import {OrderService} from "../order/order.service";
import {BikeOrder} from "../shared/models/bike-order.model";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public loginFormService: LoginFormService, public orderService: OrderService) { }

  ngOnInit(): void {
  }

  onPlaceOrder() {
    this.orderService.sendOrder();
  }
}
