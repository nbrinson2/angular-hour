import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Hour';
  rxjsExpanded = false;
  changeDetectionExpanded = false;

  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to navigation events to update which panel is open
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActivePanels();
      });

    // Initial panel state
    this.setActivePanels();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private setActivePanels(): void {
    const url = this.router.url;
    // If the URL contains '/change-detection', open that panel
    this.changeDetectionExpanded = url.includes('/change-detection');
    // Open the RxJS panel if the URL matches any of its sublinks
    this.rxjsExpanded = url.includes('/rxjs');
  }
}
