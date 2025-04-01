import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../services/albums.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = false;
  error = '';
  editTitle = '';

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    const albumId = this.route.snapshot.paramMap.get('id');
    
    if (albumId) {
      this.loadAlbumDetails(+albumId);
    } else {
      this.error = 'Album ID not provided';
      this.loading = false;
    }
  }

  loadAlbumDetails(id: number): void {
    this.albumsService.getAlbumById(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editTitle = album.title;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load album details';
        this.loading = false;
        console.error('Error loading album details:', err);
      }
    });
  }

  saveAlbum(): void {
    if (this.album && this.editTitle.trim()) {
      const updatedAlbum: Album = {
        ...this.album,
        title: this.editTitle.trim()
      };
      
      this.albumsService.updateAlbum(updatedAlbum).subscribe({
        next: (result) => {
          this.album = result;
          alert('Album updated successfully');
        },
        error: (err) => {
          console.error('Error updating album:', err);
          alert('Failed to update album title');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
