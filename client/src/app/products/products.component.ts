import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'
import {HttpClient,} from '@angular/common/http';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {

products: any
product: any

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts().subscribe(res => {
        this.products = res;
      });

  }
}



