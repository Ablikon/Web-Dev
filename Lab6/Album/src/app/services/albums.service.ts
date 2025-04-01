import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  
  // Sample albums with meaningful titles
  private sampleAlbums: Album[] = [
    {
      id: 1,
      userId: 1,
      title: 'Уличная фотография'
    },
    {
      id: 2,
      userId: 1,
      title: 'Природа и пейзажи'
    }
  ];

  // Sample photos for each album
  private samplePhotos: { [key: number]: Photo[] } = {
    1: [
      {
        id: 1,
        albumId: 1,
        title: 'Городская жизнь',
        url: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&auto=format&fit=crop&q=60',
        thumbnailUrl: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=150&auto=format&fit=crop&q=60'
      },
      {
        id: 2,
        albumId: 1,
        title: 'Уличное искусство',
        url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60',
        thumbnailUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=150&auto=format&fit=crop&q=60'
      },
      {
        id: 3,
        albumId: 1,
        title: 'Городская архитектура',
        url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format&fit=crop&q=60',
        thumbnailUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=150&auto=format&fit=crop&q=60'
      }
    ],
    2: [
      {
        id: 4,
        albumId: 2,
        title: 'Горный пейзаж',
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60',
        thumbnailUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=150&auto=format&fit=crop&q=60'
      },
      {
        id: 5,
        albumId: 2,
        title: 'Лесной массив',
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=60',
        thumbnailUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&auto=format&fit=crop&q=60'
      },
      {
        id: 6,
        albumId: 2,
        title: 'Морской закат',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
        thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=150&auto=format&fit=crop&q=60'
      }
    ]
  };
  
  constructor(private http: HttpClient) { }
  
  getAlbums(): Observable<Album[]> {
    // Return sample albums instead of making API call
    return of(this.sampleAlbums);
  }
  
  getAlbumById(id: number): Observable<Album> {
    const album = this.sampleAlbums.find(a => a.id === id);
    return of(album!);
  }
  
  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    // Return sample photos instead of making API call
    return of(this.samplePhotos[albumId] || []);
  }
  
  createAlbum(album: Album): Observable<Album> {
    // Simulate album creation
    const newAlbum = {
      ...album,
      id: this.sampleAlbums.length + 1
    };
    this.sampleAlbums.push(newAlbum);
    return of(newAlbum);
  }
  
  updateAlbum(album: Album): Observable<Album> {
    // Simulate album update
    const index = this.sampleAlbums.findIndex(a => a.id === album.id);
    if (index !== -1) {
      this.sampleAlbums[index] = album;
    }
    return of(album);
  }
  
  deleteAlbum(id: number): Observable<unknown> {
    // Simulate album deletion
    this.sampleAlbums = this.sampleAlbums.filter(a => a.id !== id);
    return of({});
  }
}
