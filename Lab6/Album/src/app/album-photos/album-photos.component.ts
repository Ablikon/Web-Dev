import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  loading = false;
  error = '';
  window = window;

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.albumId = +id;
      this.loadPhotos(this.albumId);
    } else {
      this.error = 'Album ID not provided';
      this.loading = false;
    }
  }
  
  loadPhotos(albumId: number): void {
    this.albumsService.getPhotosByAlbumId(albumId).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load photos';
        this.loading = false;
        console.error('Error loading photos:', err);
      }
    });
  }
  
  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
  
  openPhoto(url: string): void {
    window.open(url, '_blank');
  }
}
