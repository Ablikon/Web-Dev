import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../services/albums.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = false;
  error = '';
  newAlbumTitle = '';

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load albums. Please try again later.';
        this.loading = false;
        console.error('Error loading albums:', err);
      }
    });
  }

  createAlbum(): void {
    if (!this.newAlbumTitle.trim()) {
      alert('Please enter an album title');
      return;
    }

    const newAlbum: Album = {
      userId: 1, // Default user ID
      id: 0,    // Will be assigned by the server
      title: this.newAlbumTitle.trim()
    };

    this.albumsService.createAlbum(newAlbum).subscribe({
      next: (createdAlbum) => {
        // Add the new album to the UI
        this.albums = [createdAlbum, ...this.albums];
        this.newAlbumTitle = ''; // Clear the input
      },
      error: (err) => {
        console.error('Error creating album:', err);
        alert('Failed to create album. Please try again.');
      }
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation(); // Prevent navigation to detail page
    
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumsService.deleteAlbum(id).subscribe({
        next: () => {
          // Remove from UI (optimistic)
          this.albums = this.albums.filter(album => album.id !== id);
        },
        error: (err) => {
          console.error('Error deleting album:', err);
          alert('Failed to delete album. Please try again.');
        }
      });
    }
  }
}
