import { Component } from '@angular/core';
import { structuralDirectivesCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {
  protected structuralDirectivesCode = structuralDirectivesCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'No extra wrapper components. ',
        description: 'You’ve just given any host element a rich, consistent tooltip behavior—dramatically boosting reuse across your app.'
      },
      {
        label: 'Any element',
        description: 'can gain a tooltip by adding appTooltip="...".',
      },
      {
        description: 'All positioning, element creation, styling is centralized—no copy/paste.',
      },
      {
        description: 'Easy to tweak animation, delay, theme in one place.',
      }
    ],
  };
}
