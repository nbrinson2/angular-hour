import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs.service';
import { productCode } from '../../shared/constants/code-snippets.constants';
import { ActivatedRoute } from '@angular/router';
import { ExtendedProduct } from '../../shared/resolvers/product.resolver';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  product!: ExtendedProduct;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the resolved product data using snapshot.data or subscribe to data changes
    this.product = this.route.snapshot.data['product'];
  }
}
