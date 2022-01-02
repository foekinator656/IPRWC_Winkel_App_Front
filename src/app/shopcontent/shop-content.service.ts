import { Injectable } from '@angular/core';
import {BikeModel} from "../models/bike-model.model";

@Injectable({
  providedIn: 'root'
})
export class ShopContentService {

  bikeModels: BikeModel[] = [];

  constructor() { }



}
