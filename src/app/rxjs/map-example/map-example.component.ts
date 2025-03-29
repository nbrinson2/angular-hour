import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { mapExampleCode } from '../../constants/code-snippets.constants';

@Component({
  selector: 'app-map-example',
  templateUrl: './map-example.component.html',
  styleUrls: ['./map-example.component.scss']
})
export class MapExampleComponent implements OnInit, OnDestroy {

  mappedValues: number[] = [];
  mapExampleCode = mapExampleCode;
  private onDestroy$ = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    const numbers$ = of(1, 2, 3, 4, 5);

    numbers$.pipe(
      takeUntil(this.onDestroy$),
      map(value => value * 2)
    ).subscribe(mappedValue => {
      this.mappedValues.push(mappedValue);
      console.log(mappedValue); // Logs 2, 4, 6, 8, 10
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}