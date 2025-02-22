import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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
      category: 'Smartphones'
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
      category: 'Smartphones'
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13 M1',
      description: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
      price: 409990,
      rating: 5,
      images: [
        'https://gadgetstore.kz/wa-data/public/shop/products/35/03/335/images/1319/1319.970.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/',
      category: 'Laptops'
    },
    {
      id: 4,
      name: 'Apple Watch Series 9',
      description: 'Смарт-часы Apple Watch Series 9 GPS 45 мм черный',
      price: 219990,
      rating: 5,
      images: [
        'https://api.technodom.kz/f3/api/v1/images/800/800/smart_chasy_apple_watch_series_9_45mm_midnight_aluminium_case_midnight_sport_band_sm_mr993_274489_1.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45-mm-chernyi-113398437/',
      category: 'Smartwatches'
    },
    {
      id: 5,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая приставка Sony PlayStation 5 Slim Digital Edition',
      price: 299990,
      rating: 5,
      images: [
        'https://sonycenter.kz/image/cache/catalog/products/playstation/PS5-Slim/PS5-Slim-600x600.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-digital-version-115301489/?c=750000000',
      category: 'Gaming'
    },
    {
      id: 6,
      name: 'Apple AirPods Pro 2',
      description: 'Наушники Apple AirPods Pro 2nd generation белый',
      price: 119990,
      rating: 5,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASHGdXMXIerI-1nWWHcRm7FEo9H1_1HSphQ&s'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/',
      category: 'Audio'
    },
    {
      id: 7,
      name: 'Samsung Galaxy Tab S9 Ultra',
      description: 'Планшет Samsung Galaxy Tab S9 Ultra 12/256Gb Wi-Fi серый',
      price: 599990,
      rating: 5,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFFyU6UAxMs0CJcSL3hUbk6jFqBT9Epe01A&s'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzeeskz-11-djuim-12-gb-256-gb-bezhevyi-112504503/?c=750000000',
      category: 'Tablets'
    },
    {
      id: 8,
      name: 'DJI Mini 3 Pro',
      description: 'Квадрокоптер DJI Mini 3 Pro с пультом DJI RC',
      price: 449990,
      rating: 5,
      images: [
        'https://d-tech.kz/wp-content/uploads/2022/12/dji-mini-3-pro-rc-cp.ma_.00000492.02.jpeg.pagespeed.ce_.rBShog24pI-1.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/dji-mini-3-pro-belyi-dji-rc-105597357/?c=750000000',
      category: 'Drones'
    },
    {
      id: 9,
      name: 'ASUS ROG Strix G16',
      description: 'Ноутбук ASUS ROG Strix G16 G614JI-N3163 90NR0C11-M00CY0 черный',
      price: 799990,
      rating: 5,
      images: [
        'https://forcecom.kz/upload/iblock/a34/6fmoni4hv2xkdky8r47cstdk1u1vn1t0.png'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-512-gb-bez-os-g614ju-n3186-90nr0cc1-m00y20-117251822/?c=750000000',
      category: 'Gaming Laptops'
    },
    {
      id: 10,
      name: 'Samsung Odyssey G9',
      description: 'Монитор Samsung Odyssey G9 C49G95TSSI черный',
      price: 799990,
      rating: 5,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyqphlzp8j8XeIEDz8R6O-DBbKd7T62vRrg&s'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-odyssey-oled-g9-ls49cg930sixci-serebristyi-113404093/?c=750000000',
      category: 'Monitors'
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
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
