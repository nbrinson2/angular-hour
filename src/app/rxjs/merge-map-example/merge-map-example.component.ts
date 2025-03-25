import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-example',
  templateUrl: './merge-map-example.component.html',
  styleUrls: ['./merge-map-example.component.scss']
})
export class MergeMapExampleComponent implements OnInit {

  mergedValues: string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const source$ = interval(1000).pipe(
      map(val => `Source: ${val}`),
      mergeMap(val => this.fetchUserData(val))
    );

    source$.subscribe(value => {
      this.mergedValues.push(value);
      console.log(value); // Logs the values from the merged observables
    });
  }

  fetchUserData(value: string) {
    const userId = Math.floor(Math.random() * 10) + 1;
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
      map((user: any) => `User Data for ${value}: ${user.name}`)
    );
  }
}