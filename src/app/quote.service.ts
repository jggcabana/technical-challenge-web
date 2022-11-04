import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from './models/product';
import { CalculateQuoteResponse, Quote } from './models/quote';

// TODO: Move to .env file
const API_URL = 'https://localhost:7052/api'

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient) { }

  private handleError(error : HttpErrorResponse){
    alert(error.error);
   return throwError(() => new Error(error.error));
  }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products`);
  }

  getQuote(quoteId : number) :Observable<Quote>{
    return this.http.get<Quote>(`${API_URL}/quotes/${quoteId}`);
  }

  calculateQuote(quote: Quote) : Observable<HttpResponse<CalculateQuoteResponse>>{
    const url = `${API_URL}/quotes/${quote.id}/calculate`;
    return this.http.post<CalculateQuoteResponse>(url, quote, { observe : 'response' });
  }

  applyQuote(quote: Quote) :  Observable<HttpResponse<Quote>>{
    const url = `${API_URL}/quotes/${quote.id}/apply`;
    return this.http.post<Quote>(url, quote, { observe : 'response' })
      .pipe(catchError(this.handleError));
  }
}