import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../shared/models/login.request";
import {ShopUser} from "../shared/models/shop-user.model";
import {ApiService} from "../shared/api.service";

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {


  private _shopUser!: ShopUser;
  private _userIsLoggedIn: boolean = false;
  public welcomeString: string = "";

  constructor(private http: HttpClient, private apiService: ApiService ) { }

  loginShopUser(loginRequest: LoginRequest){
    if (!this.userIsLoggedIn){
      this.http.post<ShopUser>(this.apiService.apiUrl+'shopuser/login',loginRequest)
        .subscribe(shopUser => {
          console.log(shopUser);
          this.shopUser = shopUser;
          // TODO error message geven wanneer het fout gaat
          this.userIsLoggedIn = true;
        });
    }
  }

  get shopUser(): ShopUser {
    return this._shopUser;
  }
  set shopUser(value: ShopUser) {
    this._shopUser = value;
  }
  get userIsLoggedIn(): boolean {
    return this._userIsLoggedIn;
  }

  set userIsLoggedIn(value: boolean) {
    this._userIsLoggedIn = value;
  }

  makeWelcomeString() {
    console.log(this.shopUser);
    if (this.userIsLoggedIn){
      this.welcomeString = "Welkom " + this.shopUser.firstName;
    } else {
      this.welcomeString = "Welkom Gast";
    }
  }

  logOutShopUser() {
    this.userIsLoggedIn = false;
  }
}
