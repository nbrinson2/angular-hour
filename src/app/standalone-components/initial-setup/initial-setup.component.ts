import { Component } from '@angular/core';
import { User } from '../../shared/resolvers/user.resolver';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { standaloneInitialSetupCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-initial-setup',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './initial-setup.component.html',
  styleUrl: './initial-setup.component.scss',
})
export class InitialSetupComponent {
  protected user!: User;

  protected standaloneInitialSetupCode = standaloneInitialSetupCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Explicit Dependency:',
        description: 'The parent explicitly imports only InitialSetupComponent. There’s no hidden NgModule that needs to be updated.'
      },
      {
        description:
          'Marking a component as standalone: true lets it register itself directly with Angular, eliminating the need to declare it in an NgModule.',
      },
      {
        description:
          'Standalone components must explicitly list any Angular feature modules they need (e.g., CommonModule, FormsModule) in their imports array.',
      },
      {
        description:
          'You can lazy-load standalone components directly in the router using loadComponent, enabling more granular code splitting.',
      },
    ],
  };

  constructor(private route: ActivatedRoute) {
    this.user = this.route.snapshot.data['user'];
  }
}
