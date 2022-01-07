import {Component, Input, OnInit} from '@angular/core';
import {BikeModel} from "../../../shared/models/bike-model.model";
import {BikeOrder} from "../../../shared/models/bike-order.model";
import {OrdersService} from "../orders-service";

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {
  @Input("bikeOrder")       bikeOrder!: BikeOrder;
  @Input("bikeOrderPrice")  bikeOrderPrice!:  number;

  constructor(public ordersService: OrdersService) { }

  ngOnInit(){
    console.log(this.bikeOrder);
    console.log(this.bikeOrderPrice);
  }

}
