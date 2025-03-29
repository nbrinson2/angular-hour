import { Component, OnDestroy, OnInit } from "@angular/core";
import { of, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { filterExampleCode } from "../../shared/constants/code-snippets.constants";

@Component({
  selector: "app-filter-example",
  templateUrl: "./filter-example.component.html",
  styleUrls: ["./filter-example.component.scss"],
})
export class FilterExampleComponent implements OnInit, OnDestroy {
  filteredValues: number[] = [];
  filterExampleCode = filterExampleCode;
  private onDestroy$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    const numbers$ = of(1, 2, 3, 4, 5, 6);

    numbers$
      .pipe(
        takeUntil(this.onDestroy$),
        filter((value) => value % 2 === 0)
      )
      .subscribe((filteredValue) => {
        this.filteredValues.push(filteredValue);
        console.log(filteredValue); // Logs 2, 4, 6
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
