import { Component } from '@angular/core';
import { InfoItem } from '../../shared/example-info/example-info.component';
import { builtInPipesCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
  protected builtInPipesCode = builtInPipesCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Built-in transformation:',
        description: 'Angular comes with pipes like DatePipe, CurrencyPipe, and PercentPipe to format data directly in templates without cluttering component logic.',
      },
      {
        label: 'Template-friendly:',
        description: 'Pipes can be used inline with interpolation syntax, making them ideal for formatting display values without extra variables or methods.',
      },
      {
        label: 'Chainable and customizable:',
        description: 'Multiple pipes can be chained together, and many accept arguments (e.g., date format or number precision) for fine-grained control.',
      },
    ],
  };
  
  
  protected today = new Date();
  protected price = 2599.99;
  protected conversionRate = 0.8754;
  protected quantity = 12345.6789;
  protected greeting = 'hello angular';
  protected user = { name: 'Nicholas', role: 'Admin' };
  protected items = ['Apple', 'Banana', 'Orange', 'Pear'];
  protected product = {
    name: '4K Monitor',
    price: 499.99,
    releaseDate: new Date('2025-02-20')
  };
}
