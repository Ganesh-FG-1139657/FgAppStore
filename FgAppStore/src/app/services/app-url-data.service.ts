import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface DashboardItem {
  title: string;
  links: { type: string; url: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private localJsonUrl = './assets/dashboard-items.json'; // Local JSON file path

  constructor(private http: HttpClient) {}

  getDashboardItems(): Observable<DashboardItem[]> {
    // For local JSON (temporary)
    return this.http.get<DashboardItem[]>(this.localJsonUrl)
      .pipe(
        catchError(this.handleError<DashboardItem[]>('getDashboardItems', []))
      );

    // For web API (potential future use)
    // Replace the above code with appropriate HTTP call to your API endpoint
    // Example:
    // return this.http.get<DashboardItem[]>('https://your-api-endpoint/dashboard')
    //   .pipe(
    //     catchError(this.handleError<DashboardItem[]>('getDashboardItems', []))
    //   );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
