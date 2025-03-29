import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, interval, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map, delay, takeUntil } from 'rxjs/operators';
import { mergeMapExampleCode } from '../../constants/code-snippets.constants';

@Component({
  selector: 'app-merge-map-example',
  templateUrl: './merge-map-example.component.html',
  styleUrls: ['./merge-map-example.component.scss']
})
export class MergeMapExampleComponent implements OnInit, OnDestroy {

  mergedValues: string[] = [];
  mergeMapExampleCode = mergeMapExampleCode;
  private onDestroy$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const source$ = interval(1000).pipe(
      map(val => `Request ${val + 1}`), // Generate sequential request names
      mergeMap(val => this.fetchUserData(val)) // Process requests concurrently
    );

    source$.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
      this.mergedValues.push(value);
      console.log(value); // Logs the values from the merged observables in a random order
    });
  }

  fetchUserData(value: string) {
    const userId = Math.floor(Math.random() * 10) + 1; // Random user ID
    const delayTime = Math.floor(Math.random() * 5000) + 1000; // Random delay
    console.log(`Fetching data for ${value} with delay ${delayTime}ms`);
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
      delay(delayTime), // Simulate network latency
      map((user: any) => `Response for ${value}: ${user.name} (User ID: ${userId})`)
    );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}