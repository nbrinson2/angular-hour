import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'assets/mock-data.json';

  constructor(private http: HttpClient) { }

  search(term: string): Observable<string[]> {
    return this.http.get<{ items: string[] }>(this.apiUrl).pipe(
      tap(() => console.log(term)),
      map(response => response.items.filter(item => item.toLowerCase().includes(term.toLowerCase())))
    );
  }
}