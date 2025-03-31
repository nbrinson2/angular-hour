import { Component } from '@angular/core';
import { componentStateInspectorCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-component-state-inspector',
  templateUrl: './component-state-inspector.component.html',
  styleUrl: './component-state-inspector.component.scss'
})
export class ComponentStateInspectorComponent {
  currentValue: boolean = false;

  componentStateInspectorCode = componentStateInspectorCode;

  toggleValue(): void {
    this.currentValue = !this.currentValue;
    console.log('Current value toggled:', this.currentValue);
  }
}
