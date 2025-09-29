import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Product} from '../common/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private HttpClient: HttpClient) {

  }

  // Return an observable - Map the JSON data from Spring Data REST to product array
  getProductList(): Observable<Product[]> {
    return this.HttpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// create a supporting interface

// unwraps the JSON from Spring Data REST - _embedded entry
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
