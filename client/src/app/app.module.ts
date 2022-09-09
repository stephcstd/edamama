
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CartComponent } from './cart/cart.component';



const routes = [
  {path:'', component: ProductsComponent},
  {path:'product/:id', component: ViewDetailsComponent},
  {path:'cart', component: CartComponent},
  {path:'cart/:id/:qty', component: CartComponent},


]




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ViewDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(routes)
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
