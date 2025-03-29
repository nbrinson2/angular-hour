export interface NavLink {
  path: string;
  label: string;
}

export interface NavCategory {
  title: string;
  expanded: boolean;
  links: NavLink[];
}

export const NAV_CATEGORIES: NavCategory[] = [
  {
    title: 'Change Detection',
    expanded: false,
    links: [
      { path: '/change-detection/subscription-pitfall-example', label: 'Subscription Pitfall Example' },
      { path: '/change-detection/signal-solution', label: 'Signal Solution' },
      { path: '/change-detection/lifecycle-example', label: 'Lifecycle Example' },
      { path: '/change-detection/loop-example', label: 'Loop Example' },
      { path: '/change-detection/after-destroy-example', label: 'After Destroy Example' },
    ],
  },
  {
    title: 'RxJS',
    expanded: false,
    links: [
      { path: '/rxjs/fork-join-example', label: 'Fork Join Example' },
      { path: '/rxjs/filter-example', label: 'Filter Example' },
      { path: '/rxjs/map-example', label: 'Map Example' },
      { path: '/rxjs/last-value-from-example', label: 'Last Value From Example' },
      { path: '/rxjs/search-example', label: 'Search Example' },
      { path: '/rxjs/combine-latest-power-example', label: 'CombineLatest Example' },
      { path: '/rxjs/merge-map-example', label: 'MergeMap Example' },
      { path: '/rxjs/concat-map-example', label: 'ConcatMap Example' },
      { path: '/rxjs/exhaust-map-example', label: 'ExhaustMap Example' },
    ],
  },
  {
    title: 'Debugging',
    expanded: false,
    links: [
      { path: '/debugging/chrome-devtools', label: 'Debugging with Chrome DevTools' },
      { path: '/debugging/augury', label: 'Augury (Angular DevTools Extension)' },
      { path: '/debugging/angular-cli', label: 'Angular CLI and Debugging Tools' },
    ],
  }
];
