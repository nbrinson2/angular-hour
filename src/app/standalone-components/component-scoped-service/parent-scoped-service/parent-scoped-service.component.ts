import { Component } from '@angular/core';
import { ClickTrackerComponent } from '../../../shared-standalone/click-tracker/click-tracker.component';
import { ClickTrackerService } from '../../../shared/services/click-tracker.service';

@Component({
  selector: 'app-parent-scoped-service',
  standalone: true,
  imports: [ClickTrackerComponent],
  viewProviders: [ClickTrackerService],
  templateUrl: './parent-scoped-service.component.html',
  styleUrl: './parent-scoped-service.component.scss'
})
export class ParentScopedServiceComponent {

}
