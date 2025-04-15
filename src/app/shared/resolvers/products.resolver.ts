import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
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
export class ProductsResolver {
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ExtendedProduct[]> {
    return this.productService.getProducts().pipe(
      map(products => products.map(product => generateExtendedProduct(product))),
      catchError(error => {
        console.error('Error retrieving products data', error);
        this.router.navigate(['/']);
        return EMPTY;
      })
    );
  }
}
