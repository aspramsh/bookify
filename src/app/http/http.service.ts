import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Config } from '../Interfaces/config';
import { Book } from '../Interfaces/book';


@Injectable()
export class HttpService {
    configUrl = 'assets/config.json';
    bookSearchUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    bookDetailsUrl = "https://www.googleapis.com/books/v1/volumes/"

    constructor(private http: HttpClient) { }
    
    getConfig() {
        return this.http.get<Config>(this.configUrl)
        .pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    getBooks(query: string) {
      return this.http.get<Book[]>(this.bookSearchUrl + query)
        .pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    getBookDetail(id: string) {
      return this.http.get<Book>(this.bookDetailsUrl + id)
        .pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}