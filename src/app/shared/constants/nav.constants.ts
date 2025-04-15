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
  return routes.reduce<NavCategory[]>((acc, route) => {
    if (route.path === 'breadcrumbs') {
      acc.push({
        title: 'Breadcrumbs',
        expanded: false,
        links: [{ path: `/${route.path}`, label: 'Demo' }]
      });
    } else if (route.children?.length) {
      acc.push({
        title: toTitleCase(route.path || ''),
        expanded: false,
        links: route.children
          .filter(child => !child.redirectTo)
          .map(child => ({
            path: `/${route.path}/${child.path}`,
            label: toTitleCase(child.path || '')
          }))
      });
    } else if (route.loadChildren) {
      acc.push({
        title: toTitleCase(route.path || ''),
        expanded: false,
        links: [{ path: `/${route.path}`, label: toTitleCase(route.path || '') }]
      });
    }
    return acc;
  }, []);
}



export const NAV_CATEGORIES: NavCategory[] = generateNavCategories(routes);
