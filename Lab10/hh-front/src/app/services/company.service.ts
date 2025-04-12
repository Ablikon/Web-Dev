import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  // Update this URL to match your Django backend
  private baseUrl = 'http://127.0.0.1:8000/api';
  
  // Add HTTP headers
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    console.log('CompanyService initialized with base URL:', this.baseUrl);
  }

  getCompanies(): Observable<Company[]> {
    console.log('Fetching companies from:', `${this.baseUrl}/companies/`);
    return this.http.get<Company[]>(`${this.baseUrl}/companies/`, this.httpOptions)
      .pipe(
        retry(2),
        tap(companies => console.log('Companies fetched:', companies)),
        catchError(error => this.handleError(error, []))
      );
  }

  getCompany(id: number): Observable<Company> {
    console.log('Fetching company details for ID:', id);
    return this.http.get<Company>(`${this.baseUrl}/companies/${id}/`, this.httpOptions)
      .pipe(
        retry(2),
        tap(company => console.log('Company fetched:', company)),
        catchError(error => this.handleError(error, null))
      );
  }

  private handleError<T>(error: HttpErrorResponse, fallbackValue: T) {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Server Error: ${error.status} - ${error.statusText || ''}\nMessage: ${error.message}`;
      
      if (error.status === 0) {
        errorMessage = 'Server connection failed. Is the backend server running?';
      } else if (error.status === 404) {
        errorMessage = 'Resource not found. Check your API endpoint.';
      } else if (error.status === 403) {
        errorMessage = 'Access forbidden. CORS issue might be preventing access.';
      }
    }
    
    console.error('API Error:', errorMessage);
    console.error('Error details:', error);
    
    // Return an observable with a user-facing error message
    return fallbackValue !== null ? of(fallbackValue) : throwError(() => new Error(errorMessage));
  }
} 