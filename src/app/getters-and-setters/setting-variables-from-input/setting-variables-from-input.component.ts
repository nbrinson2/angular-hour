import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/resolvers/user.resolver';
import { InfoItem } from '../../shared/example-info/example-info.component';
import { settingVariablesFromInputCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-setting-variables-from-input',
  templateUrl: './setting-variables-from-input.component.html',
  styleUrl: './setting-variables-from-input.component.scss',
})
export class SettingVariablesFromInputComponent {
  protected settingVariablesFromInputCode = settingVariablesFromInputCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Getter (get):',
        description: 'A computed property that runs logic every time it’s accessed. Useful for formatting or deriving values without storing them separately.',
      },
      {
        label: 'Setter (set):',
        description: 'A hook that lets you run custom logic (validation, side effects) when a value is assigned.',
      },
    ],
  };
  protected exampleInfo2: InfoItem = {
    bulletPoints: [
      {
        label: 'Hidden Performance Costs',
        description: 'Every change-detection cycle re-invokes getters—putting heavy work inside them (loops, complex logic) can lead to janky UIs.',
      },
      {
        label: 'Surprising Side-Effects',
        description: 'Setters that trigger HTTP calls, emits, or other side effects can create tangled, hard-to-trace flows; reserve setters for simple normalization/validation.',
      },
      {
        label: 'Reduced Readability & Testability',
        description: 'Over-abstracting with getters/setters hides component state, makes your code harder to follow, and complicates unit tests—use plain properties when possible.',
      },
    ],
  };
  
  protected user!: User;

  private users: User[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.users = data['users'] as User[];
      const randomIndex = Math.floor(Math.random() * this.users.length);
      this.user = this.users[randomIndex];
    });
  }

  onUserChange() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    this.user = this.users[randomIndex];
  }
}
