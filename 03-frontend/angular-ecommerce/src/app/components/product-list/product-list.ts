import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../common/product';
import {Book} from '../../common/book';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList implements OnInit{

  products: Product[] = [];
  // Create arrays of books
  books: Book[] = [];

  // Inject our ProductService
  constructor(private productService: ProductService ) {

  }

  // Similar to @PostConstruct
  ngOnInit(): void {
    this.listProducts();
    // Call the listBooks method
    this.listBooks();
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

  // Books
  listBooks() {
    this.books = [
      {
        id: 1,
        title: 'Work for Money, Design for Love',
        author: 'David Airey',
        category: 'Business & Money',
        price: 22.00,
        rating: 5,
        badge: 'Best Seller',
        color: 'bg-amber-400',
        textColor: 'text-black'
      },
      {
        id: 2,
        title: 'Very Nice: A novel',
        author: 'Marcy Dermansky',
        category: 'Literature & Fiction',
        price: 18.00,
        rating: 4,
        badge: 'Best Seller',
        color: 'bg-teal-400',
        textColor: 'text-white'
      },
      {
        id: 3,
        title: 'The Psychology of Graphic Design Pricing',
        author: 'Various',
        category: 'Graphic Design',
        price: 20.59,
        rating: 4,
        color: 'bg-yellow-400',
        textColor: 'text-black'
      },
      {
        id: 4,
        title: 'Juliet the Maniac: A Novel',
        author: 'Juliet Escoria',
        category: 'Literature & Fiction',
        price: 9.99,
        rating: 4,
        color: 'bg-pink-300',
        textColor: 'text-white'
      },
      {
        id: 5,
        title: 'Logo Design Love: A Guide to Creating...',
        author: 'David Airey',
        category: 'Graphic Design',
        price: 24.01,
        rating: 4,
        color: 'bg-gray-900',
        textColor: 'text-white'
      },
      {
        id: 6,
        title: 'Thinking with Type, 2nd revised and expanded',
        author: 'Ellen Lupton',
        category: 'Graphic Design',
        price: 12.04,
        rating: 4,
        color: 'bg-orange-500',
        textColor: 'text-white'
      }
    ];
  }

  // Short title
  getShortTitle(title: string): string {
    return title.split(' ').slice(0, 3).join(' ');
  }

}
