import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  PRIMARY_OUTLET,
} from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.updateBreadcrumbs();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs();
      });
  }

  private updateBreadcrumbs() {
    let breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    // If the current URL is not exactly '/breadcrumbs', ensure the Home breadcrumb is at the beginning.
    if (this.router.url !== '/breadcrumbs') {
      if (!breadcrumbs.length || breadcrumbs[0].label !== 'Breadcrumbs') {
        breadcrumbs.unshift({ label: 'Breadcrumbs', url: '/breadcrumbs' });
      }
    }
    this.breadcrumbs = breadcrumbs;
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const label = route.snapshot.data['breadcrumb'];
    let currentUrl = url;

    if (route.snapshot.url.length) {
      const routeURL = route.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      currentUrl += `/${routeURL}`;
    }

    // Only add the breadcrumb if a label exists.
    // Skip adding Home when on '/breadcrumbs' (as handled later in updateBreadcrumbs)
    if (label && !(label === 'Breadcrumbs' && currentUrl === '/breadcrumbs')) {
      breadcrumbs.push({ label, url: currentUrl });
    }

    route.children.forEach((child) => {
      if (child.outlet === PRIMARY_OUTLET) {
        this.createBreadcrumbs(child, currentUrl, breadcrumbs);
      }
    });

    return breadcrumbs;
  }
}
