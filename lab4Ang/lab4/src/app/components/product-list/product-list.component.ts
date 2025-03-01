import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnChanges {
  @Input() categoryName: string = '';
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryName']) {
      this.loadProducts();
    }
  }

  loadProducts(): void {
    if (this.categoryName) {
      this.products = this.productService.getProductsByCategory(this.categoryName);
    } else {
      this.products = [];
    }
  }

  removeProduct(productId: number): void {
    this.productService.removeProduct(productId);
    this.loadProducts();
  }
}
