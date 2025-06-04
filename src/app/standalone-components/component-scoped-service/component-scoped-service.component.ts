import { Component } from '@angular/core';
import { componentScopedServiceCode } from '../../shared/constants/code-snippets.constants';
import { SharedModule } from "../../shared/shared.module";
import { InfoItem } from '../../shared/example-info/example-info.component';
import { ClickTrackerComponent } from '../../shared-standalone/click-tracker/click-tracker.component';
import { ParentScopedServiceComponent } from './parent-scoped-service/parent-scoped-service.component';

@Component({
  selector: 'app-component-scoped-service',
  standalone: true,
  imports: [SharedModule, ClickTrackerComponent, ParentScopedServiceComponent],
  templateUrl: './component-scoped-service.component.html',
  styleUrl: './component-scoped-service.component.scss'
})
export class ComponentScopedServiceComponent {

  protected componentScopedServiceCode = componentScopedServiceCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Component Scoped Service',
        description: 'A service that is scoped to a component.',
      },
    ],
  };
}
