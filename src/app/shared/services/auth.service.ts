import { computed, Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAdmin = computed(() => this.hasRole('admin'));
  currentUser = signal({
    username: 'jdoe',
    roles: ['user']
  });

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  hasRole(role: string): boolean {
    if (!this.currentUser) {
      return false;
    }

    return this.currentUser().roles.includes(role);
  }

  addRole(role: string): void {
    this.currentUser().roles.push(role);
  }

  removeRole(role: string): void {
    this.currentUser().roles = this.currentUser().roles.filter(r => r !== role);
  }
}
