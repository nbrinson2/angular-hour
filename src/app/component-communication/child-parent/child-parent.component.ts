import { Component, signal, Signal } from '@angular/core';
import { childParentCode } from '../../shared/constants/code-snippets.constants';
import { User } from '../../shared/resolvers/user.resolver';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrl: './child-parent.component.scss',
})
export class ChildParentComponent {
  get users(): Signal<User[]> {
    return this._users.asReadonly();
  }

  protected childParentCode = childParentCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Real-world use cases demand it',
        description:
          'In real applications, child components often gather input or actions (like form submissions, file uploads, or selections) that the parent component must handle.',
      },
      {
        label: 'Keeps components decoupled and reusable',
        description:
          'By using @Output and EventEmitter, the child component doesn’t need to know what happens with the data—it simply emits it. This makes the child more reusable in other contexts.',
      },
      {
        label: 'Demonstrates reactive view updates',
        description:
          'Seeing the table update instantly after the event shows how component state and the UI stay in sync using reactive patterns like Signals.',
      },
      {
        label: 'Teaches how to manage shared data',
        description:
          'This example models how parent components act as the single source of truth, managing and distributing data that’s shared across the UI.',
      },
    ],
  };

  protected displayedColumns: string[] = [
    'fullName',
    'email',
    'city',
    'company',
    'phone',
  ];

  private _users = signal<User[]>([]);

  addUser(user: User) {
    this._users.update((users) => [...users, user]);
  }
}
