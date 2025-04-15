import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product, ProductService } from '../services/product.service';

export interface ExtendedProduct extends Product {
  description: string;
  price: number;
  imageUrl: string;
}

export function generateExtendedProduct(product: Product): ExtendedProduct {
  const descriptions = [
    'An outstanding item with exceptional quality.',
    'A must-have product for your daily needs.',
    'Excellent design and performance for modern usage.',
    'A reliable product with great reviews.'
  ];
  const description = descriptions[Math.floor(Math.random() * descriptions.length)];
  const price = parseFloat((Math.random() * 100).toFixed(2));
  const imageUrl = `https://via.placeholder.com/150?text=${encodeURIComponent(product.name)}`;
  return { ...product, description, price, imageUrl };
}

@Injectable({
  providedIn: 'root'
})
export class ProductResolver {
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ExtendedProduct> {
    const id = route.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/products']);
      return EMPTY;
    }
    return this.productService.getProductById(id).pipe(
      map(product => generateExtendedProduct(product)),
      catchError(error => {
        console.error('Error retrieving product data', error);
        this.router.navigate(['/products']);
        return EMPTY;
      })
    );
  }

}
