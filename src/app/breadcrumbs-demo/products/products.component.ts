import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExtendedProduct } from '../../shared/resolvers/product.resolver';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products!: ExtendedProduct[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.products = this.route.snapshot.data['products'];
  }
}
