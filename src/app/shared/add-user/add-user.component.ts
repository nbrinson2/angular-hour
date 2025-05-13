import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../resolvers/user.resolver';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  @Output() userCreated = new EventEmitter<User>();

  fullName = '';
  email = '';
  city = '';
  company = '';
  phone = '';

  submitForm() {
    if (!this.fullName || !this.email) return;

    this.userCreated.emit({
      fullName: this.fullName,
      email: this.email,
      city: this.city,
      company: this.company,
      phone: this.phone,
    });

    // Clear form
    this.fullName = '';
    this.email = '';
    this.city = '';
    this.company = '';
    this.phone = '';
  }
}
