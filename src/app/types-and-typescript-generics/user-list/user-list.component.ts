import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/resolvers/user.resolver';
import { ActivatedRoute } from '@angular/router';
import { genericComponentCode } from '../../shared/constants/code-snippets.constants';
import { CodeSnippet } from '../../shared/example-display/example-display.component';
import { InfoItem } from '../../shared/example-info/example-info.component';
import { ProsConsItem } from '../../shared/pros-cons-table/pros-cons-table.component';

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

  compileTimeSafetyProsAndCons: ProsConsItem[] = [
    {
      pro: 'Bugs are caught immediately while coding',
      con: 'Bugs are discovered at runtime (after the app is running)'
    },
    {
      pro: 'Higher reliability — fewer runtime crashes',
      con: 'Risk of crashing apps in production'
    },
    {
      pro: 'Easier and safer refactoring',
      con: 'Harder to refactor safely'
    },
    {
      pro: 'Full IntelliSense, autocomplete, and warnings',
      con: 'IDE has no clue about correct types or fields'
    },
    {
      pro: 'Faster development with immediate feedback',
      con: 'More time wasted debugging small mistakes'
    }
  ];
  
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
  }
}
