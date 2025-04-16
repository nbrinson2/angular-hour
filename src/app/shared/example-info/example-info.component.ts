import { Component, Input } from '@angular/core';

export interface BulletPoint {
  label?: string;
  description?: string;
}

export interface InfoItem {
  context?: string;
  bulletPoints?: BulletPoint[];
}

@Component({
  selector: 'app-example-info',
  templateUrl: './example-info.component.html',
  styleUrl: './example-info.component.scss'
})
export class ExampleInfoComponent {
  @Input() heading?: string;
  @Input() item?: InfoItem;
}
