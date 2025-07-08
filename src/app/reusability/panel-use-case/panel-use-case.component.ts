import { Component } from '@angular/core';
import { User } from '../../shared/resolvers/user.resolver';
import { ActivatedRoute } from '@angular/router';
import { panelUseCaseCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-panel-use-case',
  templateUrl: './panel-use-case.component.html',
  styleUrl: './panel-use-case.component.scss'
})
export class PanelUseCaseComponent {
  protected user!: User;
  protected tasks: string[] = [];

  protected panelUseCaseCode = panelUseCaseCode;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.data['users'][0];
    this.tasks = [
      'Complete project documentation',
      'Review pull requests',
      'Attend daily standup',
      'Debug production issue',
      'Write unit tests',
      'Update dependencies'
    ];
  }
}
