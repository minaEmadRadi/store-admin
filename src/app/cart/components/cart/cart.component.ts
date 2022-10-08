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

  }

  applyFilter() { }

}
