import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ShopContentComponent } from './shopcontent/shop-content.component';
import { ShopItemComponent } from './shopcontent/shop-item/shop-item.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login/login.service";
import {OrderService} from "./order/order.service";
import { OrderItemComponent } from './order/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopContentComponent,
    ShopItemComponent,
    HeaderComponent,
    OrderComponent,
    PaymentComponent,
    LoginComponent,
    ErrorPageComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
