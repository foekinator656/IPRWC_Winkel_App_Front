import { Injectable } from '@angular/core';
import {Bike} from "../models/bike.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  bikesInCart : Bike[] = [];

  constructor() { }


}
