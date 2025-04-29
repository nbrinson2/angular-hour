import { Component } from '@angular/core';
import { typedHttpCallsCode } from '../../shared/constants/code-snippets.constants';
import { User } from '../../shared/resolvers/user.resolver';
import { ActivatedRoute } from '@angular/router';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-typed-http-calls',
  templateUrl: './typed-http-calls.component.html',
  styleUrl: './typed-http-calls.component.scss'
})
export class TypedHttpCallsComponent {
  typedHttpCallsCode = typedHttpCallsCode;
  users: User[] = [];
  exampleInfo: InfoItem = {
    context:
      'This component demonstrates how to use Angular\'s HttpClient with TypeScript generics to make strongly-typed HTTP requests.',
    bulletPoints: [
      {
        label: 'What it teaches',
        description:
          'How to make your HttpClient calls return strongly typed data.',
      },
      {
        label: 'Why it matters:',
        description:
          'Typed responses protect you from mistakes like accessing missing fields and help the compiler guide your logic.',
      },
      {
        description:
          'You want to make sure that the data you get back from the backend is strongly typed so that you can catch errors at compile time.',
      },
      {
        description: 'The frontend and backend have different concerns, therefore UI associated typing is often necessary.'
      }
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
  }
}
