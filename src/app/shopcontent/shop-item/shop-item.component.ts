import {Component, Input, OnInit} from '@angular/core';
import {BikeModel} from "../../models/bike-model.model";

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input("bikeModel")
  bikeModel!: BikeModel;


  ngOnInit(): void {
  }

  onAddToCart(bikeModelId: number) {


  }
}
