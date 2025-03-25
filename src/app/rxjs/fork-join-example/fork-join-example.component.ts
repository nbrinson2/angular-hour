import { Component, OnInit } from "@angular/core";
import { forkJoin, of, Subject } from "rxjs";
import { delay, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-fork-join-example",
  templateUrl: "./fork-join-example.component.html",
  styleUrls: ["./fork-join-example.component.scss"],
})
export class ForkJoinExampleComponent implements OnInit {
  results!: string[];
  results2!: string;
  private onDestroy$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    const observable1 = of("Hello");
    const observable3 = of("!");
    const observable2 = of("World").pipe(delay(5000));

    forkJoin([observable1, observable2, observable3])
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((results) => {
        this.results = results;
        console.log(results); // ['Hello', 'World', '!']
      });

    this.results2 = "should show first";
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
