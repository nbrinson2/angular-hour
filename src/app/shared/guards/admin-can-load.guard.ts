import { Injectable } from "@angular/core";
import { CanMatch, Route, Router, UrlSegment } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: 'root' })
export class AdminCanLoadGuard implements CanMatch {
  constructor(private auth: AuthService, private router: Router) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    if (this.auth.hasRole('admin')) {
      return true;
    }

    // Redirect and block load
    this.router.navigate(['/resolvers-guards/error-handling']);
    return false;
  }
}
