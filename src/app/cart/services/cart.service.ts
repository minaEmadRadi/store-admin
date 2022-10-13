import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCarts(param: any) {
    let params = new HttpParams();
    params = params.append("startdate", param?.start).append("enddate", param?.end)

    return this.http.get(environment.baseApi + 'carts', { params })
  }
  deleteCartItems(id: number) {
    return this.http.delete(environment.baseApi + 'carts/' + id)

  }
  getAllCarts() {
    return this.http.get(environment.baseApi + 'carts')
  }
}
