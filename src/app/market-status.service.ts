import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import {MarketPrice} from './market-price';

@Injectable({
  providedIn: 'root'
})
export class MarketStatusService {
  private Url = 'api/market/market.json'

  constructor(private http: HttpClient) { }

  getInitialMarketStatus() : Observable<MarketPrice[]> {
    return this.http.get<MarketPrice[]>(this.Url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
      // catchError(this.handleError)
    );
  }

}
