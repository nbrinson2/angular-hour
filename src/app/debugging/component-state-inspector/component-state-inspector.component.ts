import { Component } from '@angular/core';
import { componentStateInspectorCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-component-state-inspector',
  templateUrl: './component-state-inspector.component.html',
  styleUrl: './component-state-inspector.component.scss'
})
export class ComponentStateInspectorComponent {
  currentValue: boolean = false;

  componentStateInspectorCode = componentStateInspectorCode;

  exampleInfo: InfoItem = {
    context: 'Open Chrome DevTools and Angular DevTools to inspect this element and view the currentValue property.',
  }

  toggleValue(): void {
    this.currentValue = !this.currentValue;
    console.log('Current value toggled:', this.currentValue);
  }
}
