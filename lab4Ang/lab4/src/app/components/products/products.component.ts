import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedImageIndexes: { [key: number]: number } = {};

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.products.forEach(product => {
      this.selectedImageIndexes[product.id] = 0;
    });
  }

  nextImage(product: Product): void {
    const currentIndex = this.selectedImageIndexes[product.id];
    this.selectedImageIndexes[product.id] = (currentIndex + 1) % product.images.length;
  }

  prevImage(product: Product): void {
    const currentIndex = this.selectedImageIndexes[product.id];
    this.selectedImageIndexes[product.id] = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
  }

  shareOnWhatsApp(product: Product): void {
    window.open(this.productService.shareOnWhatsApp(product), '_blank');
  }

  shareOnTelegram(product: Product): void {
    window.open(this.productService.shareOnTelegram(product), '_blank');
  }

  getDisplayedImage(product: Product): string {
    return product.images[this.selectedImageIndexes[product.id]];
  }

  getRatingStars(rating: number): string[] {
    return Array(rating).fill('★');
  }
}
