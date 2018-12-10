import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IAAA } from './aaa';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private aaaUrl = 'api/AAA/aaa.json'

  constructor(private http: HttpClient) { }

  getAAAs(): Observable<IAAA[]> {
    return this.http.get<IAAA[]>(this.aaaUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAAA(id: number): Observable<IAAA | undefined> {
    return this.getAAAs().pipe(
      map((aaa: IAAA[]) => aaa.find(a => a.aaaId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
