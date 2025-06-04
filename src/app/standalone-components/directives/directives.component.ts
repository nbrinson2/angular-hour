import { Component } from '@angular/core';
import { HighlightDirective } from '../../shared-standalone/highlight.directive';
import { standaloneDirectivesCode } from '../../shared/constants/code-snippets.constants';
import { SharedModule } from '../../shared/shared.module';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [HighlightDirective, SharedModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  protected standaloneDirectivesCode = standaloneDirectivesCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Declare a standalone directive',
        description: 'with selector: \'[appHighlight]\' and standalone: true.',
      },
      {
        label: 'Import the directive directly',
        description: 'into any standalone component’s imports array—no NgModule needed.',
      },
    ],
  };
  protected items = ['First Item', 'Second Item', 'Third Item', 'Fourth Item'];
}
