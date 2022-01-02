import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'BikeShop';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    // this.fetchBikeModels();
  }

  // private fetchBikeModels() {
  //   this.http.get('http://localhost:8080/bikemodel')
  //     .subscribe(bikeModels => {
  //       console.log(bikeModels);
  //     });
  // }
  // private fetchBikeModels() {
  //   this.http.get('http://167.86.87.154:8080/bikeModel')
  //     .subscribe(bikeModels => {
  //       console.log(bikeModels);
  //     });
  // }
}
