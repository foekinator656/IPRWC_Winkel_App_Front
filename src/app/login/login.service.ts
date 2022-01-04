import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BikeModel} from "../shared/models/bike-model.model";
import {LoginRequest} from "../shared/models/login.request";
import {ShopUser} from "../shared/models/shop-user.model";
import {ApiService} from "../shared/api.service";
import {HeaderComponent} from "../header/header.component";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _shopUser!: ShopUser;
  public welcomeString: string = "";

  constructor(private http: HttpClient, private apiService: ApiService) { }

  loginShopUser(loginRequest: LoginRequest){
    this.http.post<ShopUser>(this.apiService.apiUrl+'shopuser/login',loginRequest)
      .subscribe(shopUser => {
        console.log(shopUser);
        this._shopUser = shopUser;
      });
  }

  get shopUser(): ShopUser {
    return this._shopUser;
  }

  makeWelcomeString() {
    console.log(this.shopUser);
    if (this.shopUser !== undefined){
      this.welcomeString = "Welkom " + this.shopUser.firstName;
    } else {
      this.welcomeString = "Welkom Gast";
    }
  }

}
