import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  constructor(private productService: ProductService) {}

  likeProduct(): void {
    this.productService.incrementLikes(this.product);
  }

  removeProduct(): void {
    this.remove.emit(this.product.id);
  }

  getRatingStars(rating: number): string[] {
    return Array(rating).fill('★');
  }

  shareOnWhatsApp(): void {
    window.open(this.productService.shareOnWhatsApp(this.product), '_blank');
  }

  shareOnTelegram(): void {
    window.open(this.productService.shareOnTelegram(this.product), '_blank');
  }
}
