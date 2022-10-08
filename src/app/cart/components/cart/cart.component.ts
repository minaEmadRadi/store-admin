import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private service: CartService, private build: FormBuilder) { }
  carts: any[] = [];
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.build.group({
      start: [''], end: ['']
    })
    this.getAllCarts();
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
}
