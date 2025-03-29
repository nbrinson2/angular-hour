import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-display',
  templateUrl: './example-display.component.html',
  styleUrls: ['./example-display.component.scss']
})
export class ExampleDisplayComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() codeSnippet!: string;
}
