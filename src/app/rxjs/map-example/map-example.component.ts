import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-example',
  templateUrl: './map-example.component.html',
  styleUrls: ['./map-example.component.scss']
})
export class MapExampleComponent implements OnInit {

  mappedValues: number[] = [];

  constructor() { }

  ngOnInit(): void {
    const numbers$ = of(1, 2, 3, 4, 5);

    numbers$.pipe(
      map(value => value * 2)
    ).subscribe(mappedValue => {
      this.mappedValues.push(mappedValue);
      console.log(mappedValue); // Logs 2, 4, 6, 8, 10
    });
  }
}