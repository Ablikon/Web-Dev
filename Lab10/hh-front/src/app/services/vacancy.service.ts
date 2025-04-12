import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
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
    console.log('VacancyService initialized with base URL:', this.baseUrl);
  }

  getVacancies(): Observable<Vacancy[]> {
    console.log('Fetching vacancies from:', `${this.baseUrl}/vacancies/`);
    return this.http.get<Vacancy[]>(`${this.baseUrl}/vacancies/`, this.httpOptions)
      .pipe(
        retry(2),
        tap(vacancies => console.log('Vacancies fetched:', vacancies)),
        catchError(error => this.handleError(error, []))
      );
  }

  getVacancy(id: number): Observable<Vacancy> {
    console.log('Fetching vacancy details for ID:', id);
    return this.http.get<Vacancy>(`${this.baseUrl}/vacancies/${id}/`, this.httpOptions)
      .pipe(
        retry(2),
        tap(vacancy => console.log('Vacancy fetched:', vacancy)),
        catchError(error => this.handleError(error, null))
      );
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    console.log('Fetching vacancies for company ID:', companyId);
    return this.http.get<Vacancy[]>(`${this.baseUrl}/companies/${companyId}/vacancies/`, this.httpOptions)
      .pipe(
        retry(2),
        tap(vacancies => console.log('Company vacancies fetched:', vacancies)),
        catchError(error => this.handleError(error, []))
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