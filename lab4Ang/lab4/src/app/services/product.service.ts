import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Audio' },
    { id: 4, name: 'Gaming' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый титан',
      price: 699990,
      rating: 5,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dm7UYLy-NgVA8qiIfOaQZZGhsWh3KAygRw&s',
        'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/i/p/iphone-15-pro-max-blue-titanium-256gb-camera.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDorO39IcEjIU00g_7dAV9ZXyMsBtT5X2wZQ&s'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-titan-113138420/',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Смартфон Samsung Galaxy S24 Ultra 12/256Gb серый титан',
      price: 649890,
      rating: 5,
      images: [
        'https://gadgetstore.kz/wa-data/public/shop/products/59/09/959/images/2721/2721.970.webp',
        'https://images.samsung.com/kz_ru/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-yellow-back-mo.jpg?imbypass=true',
        'https://www.ourfriday.co.uk/image/cache/catalog/Samsung/samsung-galaxy-s24-ultra-5gsmartphone-tittanium-violet-1-3-1200x1200.png'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?srsltid=AfmBOorVXwHGtDiw7nWb5YtP_AvNDvnYIhemi7k6m2mkg0BC1M1Ddyha',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      description: 'Смартфон Google Pixel 8 Pro 12/256GB черный',
      price: 499990,
      rating: 4,
      images: [
        'https://kaz-shop.net/_sh/1975/197538m.webp'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-256-gb-chernyi-113692604/',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 4,
      name: 'Xiaomi 14 Ultra',
      description: 'Смартфон Xiaomi 14 Ultra 16/512Gb черный',
      price: 599990,
      rating: 4,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzl9bNmELx2ra0JTnDHmcwRtEv7uIQAH_oQ&s'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-116348501/',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 5,
      name: 'OnePlus 12',
      description: 'Смартфон OnePlus 12 16/512Gb зеленый',
      price: 499990,
      rating: 4,
      images: [
        'https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-zelenyi-115650523/',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 6,
      name: 'Apple MacBook Air 13 M1',
      description: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
      price: 409990,
      rating: 5,
      images: [
        'https://gadgetstore.kz/wa-data/public/shop/products/35/03/335/images/1319/1319.970.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 7,
      name: 'Apple MacBook Pro 14 M3 Pro',
      description: 'Ноутбук Apple MacBook Pro 14 M3 Pro черный',
      price: 999990,
      rating: 5,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7qNjwKyGIl0GBKZhrnxYBbUvKw77eDfgLHA&s'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-mphg3-chernyi-114116482/',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 8,
      name: 'ASUS ROG Strix G16',
      description: 'Ноутбук ASUS ROG Strix G16 G614JI-N3163 90NR0C11-M00CY0 черный',
      price: 799990,
      rating: 5,
      images: [
        'https://forcecom.kz/upload/iblock/a34/6fmoni4hv2xkdky8r47cstdk1u1vn1t0.png'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-512-gb-bez-os-g614ju-n3186-90nr0cc1-m00y20-117251822/?c=750000000',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 9,
      name: 'Dell XPS 15',
      description: 'Ноутбук Dell XPS 15 9530 серебристый',
      price: 899990,
      rating: 4,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaa6DVQ9JAS5LgQtiyZmsXxgzIMeN6mNyG4Q&s'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/dell-xps-15-9530-i7-13700h-16-gb-1000-gb-ssd-windows-11-home-serebristyi-115037593/',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 10,
      name: 'Lenovo Legion Pro 7',
      description: 'Ноутбук Lenovo Legion Pro 7 16IRX8 черный',
      price: 899990,
      rating: 4,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h98/h3c/80793603145758.jpg?format=gallery-large'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/lenovo-legion-pro-7-16irx8-i9-13900hx-32-gb-2000-gb-ssd-windows-11-home-chernyi-115661222/',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 11,
      name: 'Apple AirPods Pro 2',
      description: 'Наушники Apple AirPods Pro 2nd generation белый',
      price: 119990,
      rating: 5,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASHGdXMXIerI-1nWWHcRm7FEo9H1_1HSphQ&s'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/',
      category: 'Audio',
      likes: 0
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Наушники Sony WH-1000XM5 черный',
      price: 179990,
      rating: 5,
      images: [
        'https://m.media-amazon.com/images/I/61+btxzpfDL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/',
      category: 'Audio',
      likes: 0
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      description: 'Наушники Bose QuietComfort Ultra черный',
      price: 199990,
      rating: 4,
      images: [
        'https://m.media-amazon.com/images/I/61Ywg1UxTtL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-113074323/',
      category: 'Audio',
      likes: 0
    },
    {
      id: 14,
      name: 'JBL Charge 5',
      description: 'Портативная колонка JBL Charge 5 черный',
      price: 69990,
      rating: 4,
      images: [
        'https://m.media-amazon.com/images/I/71Qp+U6PkxL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/jbl-charge-5-chernyi-101282232/',
      category: 'Audio',
      likes: 0
    },
    {
      id: 15,
      name: 'Sonos Era 300',
      description: 'Умная колонка Sonos Era 300 белый',
      price: 199990,
      rating: 4,
      images: [
        'https://m.media-amazon.com/images/I/71Oc3zhSMOL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/sonos-era-300-belyi-110645351/',
      category: 'Audio',
      likes: 0
    },
    {
      id: 16,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая приставка Sony PlayStation 5 Slim Digital Edition',
      price: 299990,
      rating: 5,
      images: [
        'https://sonycenter.kz/image/cache/catalog/products/playstation/PS5-Slim/PS5-Slim-600x600.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-digital-version-115301489/?c=750000000',
      category: 'Gaming',
      likes: 0
    },
    {
      id: 17,
      name: 'Xbox Series X',
      description: 'Игровая приставка Microsoft Xbox Series X 1TB',
      price: 299990,
      rating: 5,
      images: [
        'https://m.media-amazon.com/images/I/61-jjE67uqL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/microsoft-xbox-series-x-1tb-chernyi-100824897/',
      category: 'Gaming',
      likes: 0
    },
    {
      id: 18,
      name: 'Nintendo Switch OLED',
      description: 'Игровая приставка Nintendo Switch OLED белый',
      price: 179990,
      rating: 4,
      images: [
        'https://m.media-amazon.com/images/I/61lJC8ZTolL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102893388/',
      category: 'Gaming',
      likes: 0
    },
    {
      id: 19,
      name: 'Razer BlackShark V2 Pro',
      description: 'Гарнитура Razer BlackShark V2 Pro черный',
      price: 99990,
      rating: 4,
      images: [
        'https://m.media-amazon.com/images/I/71rK5MQJaCL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/razer-blackshark-v2-pro-chernyi-101073602/',
      category: 'Gaming',
      likes: 0
    },
    {
      id: 20,
      name: 'Logitech G Pro X Superlight',
      description: 'Мышь Logitech G Pro X Superlight черный',
      price: 79990,
      rating: 5,
      images: [
        'https://m.media-amazon.com/images/I/61MJBgRIgBL._AC_UF894,1000_QL80_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-chernyi-102712547/',
      category: 'Gaming',
      likes: 0
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryName: string): Product[] {
    return this.products.filter(product => product.category === categoryName);
  }

  incrementLikes(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index].likes++;
    }
  }

  removeProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  shareOnWhatsApp(product: Product): string {
    const text = encodeURIComponent(`Check out this awesome product: ${product.name}\n${product.kaspiLink}`);
    return `https://wa.me/?text=${text}`;
  }

  shareOnTelegram(product: Product): string {
    const text = encodeURIComponent(`Check out this awesome product: ${product.name}\n${product.kaspiLink}`);
    return `https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${text}`;
  }
}
