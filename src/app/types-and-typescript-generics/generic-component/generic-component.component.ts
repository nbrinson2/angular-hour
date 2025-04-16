import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-generic-component',
  templateUrl: './generic-component.component.html',
  styleUrl: './generic-component.component.scss',
})
export class GenericComponentComponent<T> {
  @Input() items: T[] = [];
  @Input() itemDisplaySizeMulitiplier: number = 1;
  @Input() template!: TemplateRef<any>;

  get rowHeight(): number {
    return this.itemDisplaySizeMulitiplier * 200;
  }

  // Responsive number of columns for the grid.
  cols: number = 3;

  constructor(private breakpointObserver: BreakpointObserver) {
    // Subscribe to viewport breakpoints to adjust the grid columns.
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
      ])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.cols = 1;
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.cols = 2;
        } else {
          this.cols = 3;
        }
      });
  }

  /**
   * Computes dynamic CSS styles for each list item.
   * Here, the width and height are based on the index.
   * Adjust the logic as needed to derive from item properties.
   */
  getDynamicStyles(index: number): { [key: string]: string } {
    const baseWidth = 200;
    const baseHeight = 50;

    const computedWidth = (
      baseWidth * this.itemDisplaySizeMulitiplier
    ).toString();
    const computedHeight = (
      baseHeight * this.itemDisplaySizeMulitiplier
    ).toString();

    return {
      width: computedWidth,
      height: computedHeight,
    };
  }
}
