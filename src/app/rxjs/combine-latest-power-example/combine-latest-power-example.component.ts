import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest-power-example',
  templateUrl: './combine-latest-power-example.component.html',
  styleUrls: ['./combine-latest-power-example.component.scss']
})
export class CombineLatestPowerExampleComponent implements OnInit {

  combinedValues: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const observable1 = interval(1000).pipe(
      startWith(0),
      map(val => `Observable 1: ${val}`)
    );

    const observable2 = interval(2000).pipe(
      startWith(0),
      map(val => `Observable 2: ${val}`)
    );

    const observable3 = of('Static Value').pipe(
      delay(3000)
    );

    combineLatest([observable1, observable2, observable3]).subscribe(values => {
      this.combinedValues = values;
      console.log(values); // Logs the latest values from all observables
    });
  }
}