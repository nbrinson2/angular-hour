import { Routes } from "@angular/router";
import { routes } from "../../app.routes";

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
  return str
    .split(/[-\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate an array of navigation categories from the provided routes.
 * Each top-level route that has children becomes a category. The category title
 * is derived from the top-level route's path, and each child becomes a nav link.
 */
export function generateNavCategories(routes: Routes): NavCategory[] {
  const navCategories: NavCategory[] = [];

  routes.forEach(route => {
    if (route.children && route.children.length) {
      const categoryTitle = toTitleCase(route.path || '');
      const links: NavLink[] = route.children.map(child => {
        const fullPath = `/${route.path}/${child.path}`;
        // Use the child route's path to generate a label.
        const label = toTitleCase(child.path || '');
        return { path: fullPath, label };
      });

      navCategories.push({
        title: categoryTitle,
        expanded: false,
        links: links
      });
    }
  });

  return navCategories;
}

export const NAV_CATEGORIES: NavCategory[] = generateNavCategories(routes);

