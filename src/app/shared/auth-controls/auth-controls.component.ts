import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-controls',
  templateUrl: './auth-controls.component.html',
  styleUrls: ['./auth-controls.component.scss']
})
export class AuthControlsComponent {
  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  constructor(private authService: AuthService) {}

  authorizeUser(): void {
    this.authService.addRole('admin');
  }

  unauthorizeUser(): void {
    this.authService.removeRole('admin');
  }

}
