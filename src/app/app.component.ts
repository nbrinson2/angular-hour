import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { NAV_CATEGORIES, NavCategory } from './shared/constants/nav.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Hour';

  // Clone the categories from the constant so that we can modify the `expanded` state locally.
  categories: NavCategory[] = NAV_CATEGORIES.map((category) => ({
    ...category,
  }));

  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set the initial state for expansion panels.
    this.setActivePanels();

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActivePanels();
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private setActivePanels(): void {
    const url = this.router.url;
    this.categories.forEach((category) => {
      if (category.title === 'Change Detection') {
        category.expanded = url.includes('/change-detection');
      } else if (category.title === 'RxJS') {
        category.expanded = url.includes('/rxjs');
      } else if (category.title === 'Debugging') {
        category.expanded = url.includes('/debugging');
      } else if (category.title === 'Resolvers Guards') {
        category.expanded = url.includes('/resolvers-guards');
      } else if (category.title === 'Breadcrumbs') {
        category.expanded = url.includes('/breadcrumbs');
      } else if (category.title === 'Types And Typescript Generics') {
        category.expanded = url.includes('/types-and-typescript-generics');
      }
    });
  }
}
