import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  providers: [ProductsService],
})

export class ViewDetailsComponent implements OnInit {

  products: any
  product: any
  productId: any
  qty= 1

  constructor(private productsService: ProductsService, private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.products = this.productsService.getProducts().subscribe(res => {
      this.products = res
    });
  }

  addQty() {
    this.qty ++
    console.warn(this.qty)
  }

  minusQty() {
    if(this.qty > 1){
      this.qty --
      console.warn(this.qty)
    }
  }
}