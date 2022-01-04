import { Injectable } from '@angular/core';
import {Bike} from "../shared/models/bike.model";
import {ShopUser} from "../shared/models/shop-user.model";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../shared/api.service";
import {BikeModel} from "../shared/models/bike-model.model";
import {BikeOrderStatusEnum} from "../shared/models/bike-order-status.enum";
import {BikeOrder} from "../shared/models/bike-order.model";
import {LoginFormService} from "../login-form/login-form.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  bikesInCart: Bike[] = [];
  totalOrderPrice: number = 0;
  responseBikeOrderId!: number;
  delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  constructor(private http: HttpClient,private apiService: ApiService, private loginFormService: LoginFormService) { }


  addBikeModelToCart(bikeModelId: number) {
    this.http.get<BikeModel>(this.apiService.apiUrl+'bikemodel/'+bikeModelId)
      .subscribe(bikeModel => {
        console.log(bikeModel);
        let bike = new Bike(bikeModel.bikeModelName, bikeModel, bikeModel.priceOfTheDay, true, false);
        this.bikesInCart.push(bike);
        this.totalOrderPrice += bike.price;
      });
  }


  deleteBikeFormCart(bikeIndex: number) {
    let bike  = this.bikesInCart[bikeIndex];
    this.bikesInCart.splice(bikeIndex, 1);
    this.totalOrderPrice += - bike.price;
  }

 async sendOrder() {
    let bikeOrder = new BikeOrder(BikeOrderStatusEnum.ORDER_CONFIRMED, this.loginFormService.shopUser);
    console.log(" ====== send Order ======");
    console.log(bikeOrder);
    console.log(" userId: "+this.loginFormService.shopUser.shopUserId);
    let shopUserId: number = this.loginFormService.shopUser.shopUserId;
    this.http.post<number>(this.apiService.apiUrl+'bikeorder/'+shopUserId,bikeOrder)
     .subscribe(response => {

       console.log("======Response: " + response);
       console.log(" Bike order ID " + response);
       this.responseBikeOrderId = response;
       // TODO error message geven wanneer het fout gaat
     });
   while (this.responseBikeOrderId === undefined){
     await this.delay(1000);
   }
    console.log(" XXXXX response id: " + this.responseBikeOrderId);
    for (let bike in this.bikesInCart){
      this.http.post<number>(this.apiService.apiUrl+'bike/add/'+this.responseBikeOrderId, bike);
        // .subscribe(responseBikeId => {
        //   console.log("Bike met Id " + responseBikeId + " is aangemaakt");
        //   // TODO error message geven wanneer het fout gaat
        // });
    }
    return  this.responseBikeOrderId;
  }
}
