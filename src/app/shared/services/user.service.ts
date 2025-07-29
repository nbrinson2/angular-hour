import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  getUserById(userId: string): Observable<UserResponse> {
    const response = this.http.get<UserResponse>(`${this.baseUrl}/${userId}`);
    return response;
  }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.baseUrl);
  }

  // Promise<string>
  getUserWithPromise(): Promise<string> {
    return firstValueFrom(this.http.get<{ name: string }>(`${this.baseUrl}/1`)).then(
      (response) => response.name
    );
  }

  // Observable<string>
  getUserWithObservable(): Observable<string> {
    return this.http
      .get<{ name: string }>(`${this.baseUrl}/1`)
      .pipe(map((response) => response.name));
  }
}
