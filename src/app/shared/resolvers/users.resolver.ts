import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, map, catchError, EMPTY } from "rxjs";
import { UserService, UserResponse } from "../services/user.service";
import { User } from "./user.resolver";

@Injectable({ providedIn: 'root' })
export class UsersResolver {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers().pipe(
      map((responses: UserResponse[]) =>
        responses.map((response: UserResponse) => ({
          fullName: `${response.name} (${response.username})`,
          email: response.email,
          city: response.address.city,
          company: `${response.company.name} - ${response.company.catchPhrase}`,
          phone: response.phone,
        }))
      ),
      catchError((error) => {
        this.router.navigate(['/resolvers-guards/error-handling']);
        return EMPTY;
      })
    );
  }
}
