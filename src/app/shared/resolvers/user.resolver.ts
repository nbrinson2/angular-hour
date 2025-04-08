import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { UserService, UserResponse } from '../services/user.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

export interface User {
  fullName: string;
  email: string;
  city: string;
  company: string;
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class UserResolver {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    return this.userService.getUserById(userId!).pipe(
      map(
        (response: UserResponse): User => ({
          fullName: `${response.name} (${response.username})`,
          email: response.email,
          city: response.address.city,
          company: `${response.company.name} - ${response.company.catchPhrase}`,
          phone: response.phone,
        })
      ),
      catchError((error) => {
        this.router.navigate(['/resolvers-guards/error-handling']);
        return EMPTY;
      })
    );
  }
}
