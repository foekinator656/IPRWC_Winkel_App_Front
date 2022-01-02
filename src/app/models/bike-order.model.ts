import {BikeOrderStatusEnum} from "./bike-order-status.enum";
import {ShopUser} from "./shop-user.model";

export class BikeOrderModel {
  public orderId: number;
  public bikeOrderStatus: BikeOrderStatusEnum = 0;
  public shopUser: ShopUser;
  constructor(orderId: number, bikeOrderStatus: BikeOrderStatusEnum, shopUser: ShopUser) {
    this.orderId = orderId;
    this.bikeOrderStatus = bikeOrderStatus;
    this.shopUser = shopUser;
  }
}
