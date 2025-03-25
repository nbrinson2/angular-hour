import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join-example',
  templateUrl: './fork-join-example.component.html',
  styleUrls: ['./fork-join-example.component.scss']
})
export class ForkJoinExampleComponent implements OnInit {

  results!: string[];
  results2!: string;;

  constructor() { }

  ngOnInit(): void {
    const observable1 = of('Hello');
    const observable3 = of('!');
    const observable2 = of('World').pipe(delay(5000));

    forkJoin([observable1, observable2, observable3]).subscribe(results => {
      this.results = results;
      console.log(results); // ['Hello', 'World', '!']
    });

    this.results2 = 'should show first'
  }
}