import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAdmin = computed(() => this.currentUser().roles.includes('admin'));

  get currentUser(): Signal<{ username: string; roles: string[] }> {
    return this._currentUser.asReadonly();
  }

  private _currentUser = signal({
    username: 'jdoe',
    roles: ['user'],
  });

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  hasRole(role: string): boolean {
    return this.currentUser().roles.includes(role);
  }

  addRole(role: string): void {
    if (this.currentUser().roles.includes(role)) {
      return;
    }

    this._currentUser.update((user) => ({
      ...user,
      roles: [...user.roles, role],
    }));
  }

  removeRole(role: string): void {
    if (!this.currentUser().roles.includes(role)) {
      return;
    }

    this._currentUser.update((user) => ({
      ...user,
      roles: user.roles.filter((r) => r !== role),
    }));
  }
}
