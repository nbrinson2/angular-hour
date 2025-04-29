import { Component, Input } from '@angular/core';
import { unionTypesCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';
import { RequestStatus } from './status-indicator/status-indicator.component';

@Component({
  selector: 'app-union-types',
  templateUrl: './union-types.component.html',
  styleUrl: './union-types.component.scss'
})
export class UnionTypesComponent {
  unionTypesCode = unionTypesCode;
  exampleInfo: InfoItem = {
    context:
      'Union types limit a variable to a fixed set of values (e.g., "loading" | "success" | "error"), which improves safety, code clarity, and IntelliSense support.',
    bulletPoints: [
      {
        label: 'Safer API:',
        description: 'Only "idle" | "loading" | "success" | "error" are allowed as status values.',
      },
      {
        label: 'Autocomplete & Refactoring:',
        description: 'Your IDE helps you navigate and autocomplete valid statuses.',
      },
      {
        label: 'Cleaner Logic:',
        description: 'No magic strings scattered through the app.',
      },
    ],
  };

  status: RequestStatus = 'idle';

  simulateRequest() {
    this.status = 'loading';
    setTimeout(() => {
      const success = Math.random() > 0.5;
      this.status = success ? 'success' : 'error';
    }, 2000);
  }
}
