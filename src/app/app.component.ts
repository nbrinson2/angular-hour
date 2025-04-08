import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { NavCategory, NAV_CATEGORIES } from './shared/constants/nav.constants';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly isAdmin = this.authService.isAdmin;

  title = 'Angular Hour';

  // Clone the categories from the constant so that we can modify the `expanded` state locally.
  categories: NavCategory[] = NAV_CATEGORIES.map(category => ({ ...category }));

  private routerSubscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActivePanels();
      });

    // Set the initial state for expansion panels.
    this.setActivePanels();
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private setActivePanels(): void {
    const url = this.router.url;
    this.categories.forEach(category => {
      if (category.title === 'Change Detection') {
        category.expanded = url.includes('/change-detection');
      } else if (category.title === 'RxJS') {
        category.expanded = url.includes('/rxjs');
      }
    });
  }
}
