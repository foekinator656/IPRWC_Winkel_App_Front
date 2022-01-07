import {Injectable} from "@angular/core";
import {ShopUser} from "../../shared/models/shop-user.model";
import {BikeModel} from "../../shared/models/bike-model.model";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../shared/api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : ShopUser[] = [];
  errorMessage!: string;

  constructor(private http: HttpClient,private apiService: ApiService) { }

  fetchShopUsers() {
    this.http.get<ShopUser[]>(this.apiService.apiUrl+'shopuser')
      .subscribe(shopUsers => {
        console.log(shopUsers);
        this.users = shopUsers;
      }, error => {
        console.log(error);
        this.errorMessage = error;
      });
  }
}
