import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[ProductsService]
})

export class CartComponent implements OnInit {

  cart: any
  productId: any
  qty: any
  price: any
  total: any
  response: any

  constructor(private productsService: ProductsService, private activatedRoute:ActivatedRoute  ) { }
  
  ngOnInit(){

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.qty = this.activatedRoute.snapshot.paramMap.get('qty');

    if(this.productId && this.qty){
      
      this.response = this.productsService.addToCart(this.productId, this.qty).subscribe(res => {
        this.response = res
        console.log(res)
      });

      this.productId = null
      this.qty = null
      this.cart= this.productsService.getCart().subscribe(res => {
        this.cart = res;
      });

    }else{
      this.cart= this.productsService.getCart().subscribe(res => {
        this.cart = res;
      });
    }
  }
}