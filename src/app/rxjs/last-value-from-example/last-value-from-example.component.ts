import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { lastValueFromExampleCode } from '../../constants/code-snippets.constants';

@Component({
  selector: 'app-last-value-from-example',
  templateUrl: './last-value-from-example.component.html',
  styleUrls: ['./last-value-from-example.component.scss']
})
export class LastValueFromExampleComponent implements OnInit {

  lastValue!: string
  lastValueFromExampleCode = lastValueFromExampleCode;

  constructor() { }

  async ngOnInit(): Promise<void> {
    const observable$ = of('Hello', 'World', '!').pipe(delay(1000));
    this.lastValue = await lastValueFrom(observable$);
  }
}