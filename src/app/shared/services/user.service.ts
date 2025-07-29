// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { firstValueFrom, map, Observable, of, tap } from 'rxjs';
import { CacheService } from './cache.service';

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
    private cache: CacheService
  ) {}

  getUserById(userId: string): Observable<UserResponse> {
    const key = `user-${userId}`;
    if (this.cache.has(key)) {
      // Pull the cached HttpResponse<T> and return its body
      const cachedResponse = this.cache.get<UserResponse>(key)!;
      return of(cachedResponse.body!);
    }

    return this.http
      .get<UserResponse>(`${this.baseUrl}/${userId}`, { observe: 'response' })
      .pipe(
        tap(response => this.cache.put(key, response)),
        map(response => response.body!)
      );
  }

  getUsers(): Observable<UserResponse[]> {
    const key = 'users';
    if (this.cache.has(key)) {
      const cachedResponse = this.cache.get<UserResponse[]>(key)!;
      return of(cachedResponse.body!);
    }

    return this.http
      .get<UserResponse[]>(this.baseUrl, { observe: 'response' })
      .pipe(
        tap(response => this.cache.put(key, response)),
        map(response => response.body!)
      );
  }

  // Promise<string> (unchanged)
  getUserWithPromise(): Promise<string> {
    return firstValueFrom(
      this.http.get<{ name: string }>(`${this.baseUrl}/1`)
    ).then(resp => resp.name);
  }

  // Observable<string> (unchanged)
  getUserWithObservable(): Observable<string> {
    return this.http
      .get<{ name: string }>(`${this.baseUrl}/1`)
      .pipe(map(r => r.name));
  }
}
