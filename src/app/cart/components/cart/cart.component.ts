import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private service: CartService, private build: FormBuilder, private productsServices: ProductsService) { }
  carts: any[] = [];
  products: any[] = [];

  form!: FormGroup;
  details: any;
  ngOnInit(): void {
    this.getAllCarts();
    this.form = this.build.group({
      start: [''], end: ['']
    })
  }
  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res
    })
  }

  applyFilter() {
    let date = this.form.value
    this.service.getCarts(date).subscribe((res: any) => {
      this.carts = res
    })
    console.log(this.carts)
  }
  deleteCart(id: number) {
    this.service.deleteCartItems(id).subscribe((res: any) => {
      this.getAllCarts();
      alert("deleted success ")
    })
  }
  start() {
    let params = new HttpParams();
    params = params.append("startdate", this.form.value?.start).append("enddate", this.form.value?.end)
    console.log(params)
    console.log(this.form.value)

  }
  view(index: number) {
    this.products = [];
    this.details = this.carts[index];
    for (let x in this.details.products)
      this.productsServices.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({ item: res, quantity: this.details.products[x].quantity })
      })
  }
}
