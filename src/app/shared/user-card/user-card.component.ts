import { Component, Input } from '@angular/core';
import { User } from '../resolvers/user.resolver';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User;
}
