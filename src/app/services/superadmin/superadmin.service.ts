import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SuperadminService {
  
  baseUri:string = 'https://adminportal-e54f8.firebaseapp.com/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Login
  login(data): Observable<any> {
    let url = `${this.baseUri}/login`;
    return this.http.post(url, data, {responseType: 'text'})
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  // Logout
  logout() {
    let url = `${this.baseUri}/logout`;
    return this.http.get(url);
  }

  // Is Logged In
  isLoggedIn() {
    let url = `${this.baseUri}/isLoggedIn`;
    return this.http.get(url);
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}