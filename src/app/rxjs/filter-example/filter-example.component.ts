import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-filter-example",
  templateUrl: "./filter-example.component.html",
  styleUrls: ["./filter-example.component.scss"],
})
export class FilterExampleComponent implements OnInit {
  filteredValues: number[] = [];

  constructor() {}

  ngOnInit(): void {
    const numbers$ = of(1, 2, 3, 4, 5, 6);

    numbers$
      .pipe(filter((value) => value % 2 === 0))
      .subscribe((filteredValue) => {
        this.filteredValues.push(filteredValue);
        console.log(filteredValue); // Logs 2, 4, 6
      });
  }
}
