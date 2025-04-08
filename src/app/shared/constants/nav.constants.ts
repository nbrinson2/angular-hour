import { Routes } from '@angular/router';
import { routes } from '../../app.routes';

export interface NavLink {
  path: string;
  label: string;
}

export interface NavCategory {
  title: string;
  expanded: boolean;
  links: NavLink[];
}

// Helper function: Converts a hyphenated string into Title Case.
function toTitleCase(str: string): string {
  const firstSegment = str.split('/')[0]; // Only take part before first '/'
  return firstSegment
    .split(/[-\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate an array of navigation categories from the provided routes.
 * Each top-level route that has children becomes a category. The category title
 * is derived from the top-level route's path, and each child becomes a nav link.
 */
export function generateNavCategories(routes: Routes): NavCategory[] {
  const navCategories: NavCategory[] = [];

  routes.forEach((route) => {
    const categoryTitle = toTitleCase(route.path || '');

    if (route.children && route.children.length) {
      const links: NavLink[] = route.children
        .filter((child) => !child.redirectTo)
        .map((child) => {
          const fullPath = `/${route.path}/${child.path}`;
          // Use the child route's path to generate a label.
          const label = toTitleCase(child.path || '');
          return { path: fullPath, label };
        });

      navCategories.push({
        title: categoryTitle,
        expanded: false,
        links: links,
      });
    } else if (route.loadChildren) {
      // 👈 Handle lazy-loaded top-level routes
      const label = toTitleCase(route.path || '');
      navCategories.push({
        title: categoryTitle,
        expanded: false,
        links: [{ path: `/${route.path}`, label }],
      });
    }
  });

  return navCategories;
}

export const NAV_CATEGORIES: NavCategory[] = generateNavCategories(routes);
