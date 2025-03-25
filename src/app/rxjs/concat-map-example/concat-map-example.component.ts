import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map-example',
  templateUrl: './concat-map-example.component.html',
  styleUrls: ['./concat-map-example.component.scss']
})
export class ConcatMapExampleComponent implements OnInit {

  results: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const source$ = of('Request 1', 'Request 2', 'Request 3');

    source$.pipe(
      concatMap(val => this.mockApiCall(val))
    ).subscribe(result => {
      this.results.push(result);
      console.log(result); // Logs the results from the API calls in order
    });
  }

  mockApiCall(value: string) {
    const delayTime = Math.floor(Math.random() * 5000) + 1000;
    return of(`Response for ${value}`).pipe(delay(delayTime));
  }
}