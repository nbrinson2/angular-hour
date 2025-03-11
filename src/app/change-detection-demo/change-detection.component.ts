import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent {
  showDemo: 'interference' | 'on-push' = 'interference';
  interferenceMode: 'safe' | 'unsafe' = 'unsafe';
}
