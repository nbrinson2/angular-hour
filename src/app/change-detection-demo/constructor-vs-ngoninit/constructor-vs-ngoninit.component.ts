import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { constructorVsNgoninitCode } from '../../shared/constants/code-snippets.constants';
import { ProsConsItem } from '../../shared/pros-cons-table/pros-cons-table.component';

@Component({
  selector: 'app-constructor-vs-ngoninit',
  templateUrl: './constructor-vs-ngoninit.component.html',
  styleUrl: './constructor-vs-ngoninit.component.scss',
})
export class ConstructorVsNgoninitComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  protected constructorVsNgoninitCode = constructorVsNgoninitCode;

  protected comparisonColumns = [
    { key: 'hook', header: 'Lifecycle Hook' },
    { key: 'when', header: 'When It Runs' },
    { key: 'triggeredBy', header: 'Triggered By' },
  ];

  protected comparisonRows = [
    {
      hook: 'constructor',
      when: 'When the class is instantiated',
      triggeredBy: 'Component class creation (before Angular touches it)',
    },
    {
      hook: 'ngOnChanges',
      when: 'Before ngOnInit + on input changes',
      triggeredBy: '@Input() change',
    },
    {
      hook: 'ngOnInit',
      when: 'Once after inputs',
      triggeredBy: 'Component init',
    },
    {
      hook: 'ngAfterContentInit',
      when: 'After content projection',
      triggeredBy: '<ng-content>',
    },
    {
      hook: 'ngAfterViewInit',
      when: 'After view + children ready',
      triggeredBy: 'View init',
    },
  ];

  protected childTitle = 'Child Component';

  constructor() {
    console.log('Parent: Constructor');
  }

  ngOnInit(): void {
    console.log('Parent: ngOnInit');
    // Simulate a change after init
    setTimeout(() => {
      this.childTitle = 'Updated Title After Init';
    }, 2000);
  }

  ngAfterContentInit(): void {
    console.log('Parent: ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('Parent: ngAfterViewInit');
  }
}
