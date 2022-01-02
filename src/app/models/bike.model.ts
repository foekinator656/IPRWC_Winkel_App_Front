import {BikeModel} from "./bike-model.model";


export class Bike {
  public bikeId: number;
  public bikeName: string;
  public bikeModel: BikeModel;
  public price: number;
  public bikeInStock: boolean;
  public bikeIsSold: boolean



  constructor(bikeId: number, bikeName: string, bikeModel: BikeModel, price: number, bikeInStock: boolean, bikeIsSold: boolean) {
    this.bikeId = bikeId;
    this.bikeName = bikeName;
    this.bikeModel = bikeModel;
    this.price = price;
    this.bikeInStock = bikeInStock;
    this.bikeIsSold = bikeIsSold;
  }


}
