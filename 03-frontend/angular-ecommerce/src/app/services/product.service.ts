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

  /**
   * Retrieves the complete list of products from the API.
   *
   * Makes an HTTP GET request to the base URL and extracts the products array
   * from the nested response structure (_embedded.products).
   *
   * @returns Observable<Product[]> - An observable stream that emits an array of Product objects
   */

  // Return an observable - Map the JSON data from Spring Data REST to product array
  getProductList(): Observable<Product[]> {
    return this.HttpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// create a supporting interface

/**
 * Interface to unwrap the JSON response from Spring Data REST.
 * Spring Data REST wraps collections in an _embedded object,
 * which is part of the HAL (Hypertext Application Language) format.
 */
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
