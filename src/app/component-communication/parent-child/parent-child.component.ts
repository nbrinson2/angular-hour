import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parentChildCode } from '../../shared/constants/code-snippets.constants';
import { User } from '../../shared/resolvers/user.resolver';

interface Data {
  users: User[];
}

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.scss'
})
export class ParentChildComponent {
  protected users: User[] = [];
  protected selectedUser: User | null = null;
  protected parentChildCode = parentChildCode;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.users = (data as Data).users;
    });
  }

  protected selectUser(user: User) {
    this.selectedUser = user;
  }
}
