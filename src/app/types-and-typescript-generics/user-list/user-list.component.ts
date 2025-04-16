import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/resolvers/user.resolver';
import { ActivatedRoute } from '@angular/router';
import { genericComponentCode } from '../../shared/constants/code-snippets.constants';
import { CodeSnippet } from '../../shared/example-display/example-display.component';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users!: User[];
  genericComponentCode: CodeSnippet[] = genericComponentCode;
  exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'With Generics:',
        description:
          'You get compile‑time safety and a much better developer experience (accurate autocompletion and error detection), tailored to whatever specific type is used.',
      },
      {
        label: 'With any:',
        description:
          'You would lose these benefits; all items would be treated as untyped, potentially allowing mismatches and errors that only appear at runtime.',
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
  }
}
