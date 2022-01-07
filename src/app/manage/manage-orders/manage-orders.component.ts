import {Component, OnInit, Output} from '@angular/core';
import {OrdersService} from "./orders-service";
import {BikeOrder} from "../../shared/models/bike-order.model";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../shared/api.service";
import {Bike} from "../../shared/models/bike.model";
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  getOrdersDone: boolean = false;
  bikes: Bike[] = [];
  bikeOrders!: BikeOrder[];
  bikeOrderPrices: number[] = [];
  errorMessage!: string;
  delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  constructor(public ordersService: OrdersService,private http: HttpClient,private apiService: ApiService) { }

  ngOnInit() {
    console.log("calling this.ordersService.fetchBikeOrders(); ")
    this.fetchBikeOrders();
    this.getAllBikes();
    // for (let bikeOrder of this.bikeOrders){
    //   this.getPriceForOrder(bikeOrder).then(r => this.bikeOrderPrices.push(r));
    // }

    // this.saveBikeOrders();
    // this.ordersService.bikeOrders = this.saveBikeOrders();
    console.log(" buiten  de subscribe" + this.bikeOrders);
    console.log(" completed");
  }

  fetchBikeOrders() {
    this.http.get<BikeOrder[]>(this.apiService.apiUrl+'bikeorder')
      .subscribe(bikeOrders => {
        console.log(bikeOrders);
        this.bikeOrders = bikeOrders.slice();
        console.log(this.bikeOrders);
        return bikeOrders;
      }, error => {
        console.log(error);
        this.errorMessage = error;
      });
  }

  getAllBikes(){
    this.http.get<Bike[]>(this.apiService.apiUrl+'bike')
      .subscribe(bikes => {
        console.log(bikes);
        this.bikes = bikes.slice();
        console.log(this.bikeOrders);
        return bikes;
      }, error => {
        console.log(error);
        this.errorMessage = error;
      });
  }

}
