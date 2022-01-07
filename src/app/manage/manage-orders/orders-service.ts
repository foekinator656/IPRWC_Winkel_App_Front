import {Injectable} from "@angular/core";
import {BikeOrder} from "../../shared/models/bike-order.model";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../shared/api.service";
import {resolve} from "@angular/compiler-cli";
import {Bike} from "../../shared/models/bike.model";


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  getOrdersDone: boolean = false;
  bikes: Bike[] = [];
  bikeOrders: BikeOrder[] | undefined;
  bikeOrderPrices: number[] = [];
  errorMessage!: string;

  delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  // bikeOrders: Object[];
  //
  // constructor(private http: HttpClient, private apiService: ApiService) {
  //   this.bikeOrders = [];
  // }

// }
  // fetchBikeOrders() {
  //   let promise = new Promise((resolve, reject) == > {
  //     this.http.get<BikeOrder[]>(this.apiService.apiUrl + 'bikeorder').toPromise()
  //       .then(
  //         bikeOrders => {
  //           this.bikeOrders = bikeOrders
  //         },
  //         error => {
  //           console.log(error);
  //           this.errorMessage = error;
  //         }
  //       )
  //   });
  // }
    //   .subscribe(bikeOrders => {
    //     console.log(bikeOrders);
    //     this.bikeOrders = bikeOrders.slice();
    //     console.log(this.bikeOrders);
    //     this.getOrdersDone = true;
    //     console.log(this.getOrdersDone);
    //   }, error => {
    //     console.log(error);
    //     this.errorMessage = error;
    //   });
    // while (!this.getOrdersDone) {
    //    await this.delay(1000);
    // }
  //
  //   // console.log("de bikeOrders lengte: " + this.bikeOrders.length);
  //   // console.log("Bikeorders geladen met fetchBikeOrders: " + this.bikeOrders);
  //   //
  //   // // for (let bikeOrder of this.bikeOrders) {
  //   // //   let price = this.getPriceForOrder(bikeOrder);
  //   // //   this.bikeOrderPrices.push(price);
  //   // // }
  //   // console.log("de bikeOrderPrices lengte: " + this.bikeOrderPrices.length)
  // }
  //
  //  async getPriceForOrder(bikeOrder: BikeOrder){
  //    while (!this.getOrdersDone) {
  //      await this.delay(2000);
  //    }
  //    while (this.bikeOrders === undefined) {
  //      await this.delay(2000);
  //    }
  //   console.log("binnen getPriceForOrder");
  //   console.log("111 ********************" + bikeOrder);
  //   let orderId = bikeOrder.bikeOrderId;
  //   console.log("222 ********************" + bikeOrder.bikeOrderId);
  //    console.log(bikeOrder.bikeOrderId);
  //   console.log("333 ********************" + orderId);
  //   let bikesReceived = false;
  //   let totalprice: number = 0;
  //   this.http.get<Bike[]>(this.apiService.apiUrl+'bike/'+bikeOrder.bikeOrderId)
  //     .subscribe(bikesAPI => {
  //       console.log(bikesAPI);
  //       this.bikes = bikesAPI;
  //       bikesReceived = true;
  //     }, error => {
  //       console.log(error);
  //       this.errorMessage = error;
  //     });
  //   // while (!bikesReceived) {
  //   //    await this.delay(1000);
  //   // }
  //
  //   for (let bike of this.bikes){
  //     totalprice += bike.price;
  //   }
  //   return totalprice;
  //   // return 9999;
  // }
}
