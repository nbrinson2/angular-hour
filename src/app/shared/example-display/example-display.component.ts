import { Component, Input } from '@angular/core';

export enum CodeType {
  HTML = 'html',
  TS = 'ts',
  SCSS = 'scss',
  JSON = 'json',
  CSS = 'css'
}

export interface CodeSnippet {
  type: CodeType;
  code: string;
}

@Component({
  selector: 'app-example-display',
  templateUrl: './example-display.component.html',
  styleUrls: ['./example-display.component.scss']
})
export class ExampleDisplayComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() codeSnippet?: string;
  @Input() codeSnippets?: CodeSnippet[];
}
