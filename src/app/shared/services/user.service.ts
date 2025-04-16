import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUserById(userId: string): Observable<UserResponse> {
    const response = this.http.get<UserResponse>(`${this.baseUrl}/${userId}`);
    console.log('Response:', response);
    return response;
  }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.baseUrl);
  }
}
