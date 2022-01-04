import { Injectable } from '@angular/core';
import {Bike} from "../shared/models/bike.model";
import {ShopUser} from "../shared/models/shop-user.model";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../shared/api.service";
import {BikeModel} from "../shared/models/bike-model.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  bikesInCart : Bike[] = [];
  totalOrderPrice : number = 0;

  constructor(private http: HttpClient,private apiService: ApiService) { }


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
}
