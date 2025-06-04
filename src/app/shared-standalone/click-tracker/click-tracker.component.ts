import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ClickTrackerService } from '../../shared/services/click-tracker.service';

@Component({
  selector: 'app-click-tracker',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './click-tracker.component.html',
  styleUrl: './click-tracker.component.scss',
})
export class ClickTrackerComponent {
  protected service!: ClickTrackerService;

  constructor(
    @Optional()
    @Host()
    public parentService: ClickTrackerService | null
  ) {
    console.log('ClickTrackerComponent constructor', parentService);
    this.service = parentService ?? new ClickTrackerService();
  }

  handleClick() {
    this.service.increment();
  }
}
