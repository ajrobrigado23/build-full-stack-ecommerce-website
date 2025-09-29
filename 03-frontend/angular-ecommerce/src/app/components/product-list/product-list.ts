import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../common/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList implements OnInit{

  products: Product[] = [];

  // Inject our ProductService
  constructor(private productService: ProductService ) {

  }

  // Similar to @PostConstruct
  ngOnInit(): void {
    this.listProducts();
  }


  /**
   * Fetches and displays the list of products.
   *
   * Calls the product service to retrieve all products and assigns them
   * to the local products array for display in the template.
   * The subscription executes asynchronously, updating the products
   * when the HTTP request completes.
   */
  listProducts() {
    // subscribe execute in asynchronously
    this.productService.getProductList().subscribe({
      // Assign the returned data to the component's products array

      // callback handlers (next, error)
      next: data => {
        this.products = data;
    },
      // Handles errors
      error: err => {
        console.error('Error fetching products:', err);
      }
    })
  }

  protected readonly Product = Product;
}
