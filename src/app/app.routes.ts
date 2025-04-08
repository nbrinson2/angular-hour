import { Routes } from '@angular/router';
import { SubscriptionPitfallScenarioComponent } from './change-detection-demo/subscription-pitfall-scenario/subscription-pitfall-scenario.component';
import { FilterExampleComponent } from './rxjs/filter-example/filter-example.component';
import { ForkJoinExampleComponent } from './rxjs/fork-join-example/fork-join-example.component';
import { LastValueFromExampleComponent } from './rxjs/last-value-from-example/last-value-from-example.component';
import { MapExampleComponent } from './rxjs/map-example/map-example.component';
import { SearchExampleComponent } from './rxjs/search-example/search-example.component';
import { SignalSolutionComponent } from './change-detection-demo/signal-solution/signal-solution.component';
import { LifecycleScenarioComponent } from './change-detection-demo/lifecycle-scenario/lifecycle-scenario.component';
import { LoopScenarioComponent } from './change-detection-demo/loop-scenario/loop-scenario.component';
import { AfterDestroyScenarioComponent } from './change-detection-demo/after-destroy-scenario/after-destroy-scenario.component';
import { OnPushComponent } from './change-detection-demo/on-push/on-push.component';
import { CombineLatestPowerExampleComponent } from './rxjs/combine-latest-power-example/combine-latest-power-example.component';
import { MergeMapExampleComponent } from './rxjs/merge-map-example/merge-map-example.component';
import { ConcatMapExampleComponent } from './rxjs/concat-map-example/concat-map-example.component';
import { ExhaustMapExampleComponent } from './rxjs/exhaust-map-example/exhaust-map-example.component';
import { PerformanceTestComponent } from './debugging/chrome-devtools/performance-test.component';
import { BreakpointsComponent } from './debugging/breakpoints/breakpoints.component';
import { ComponentStateInspectorComponent } from './debugging/component-state-inspector/component-state-inspector.component';
import { NetworkMonitoringComponent } from './debugging/network-monitoring/network-monitoring.component';
import { UserResolver } from './shared/resolvers/user.resolver';
import { SeparateConcernsComponent } from './resolvers-guards/separate-concerns/separate-concerns.component';
import { ErrorHandlingComponent } from './resolvers-guards/error-handling/error-handling.component';
import { DeactivationGuardComponent } from './resolvers-guards/deactivation-guard/deactivation-guard.component';
import { UnsavedChangesGuard } from './shared/guards/unsaved-changes.guard';
import { AdminCanLoadGuard } from './shared/guards/admin-can-load.guard';

export const routes: Routes = [
  {
    path: 'rxjs',
    children: [
      { path: 'fork-join-example', component: ForkJoinExampleComponent },
      { path: 'filter-example', component: FilterExampleComponent },
      { path: 'map-example', component: MapExampleComponent },
      {
        path: 'last-value-from-example',
        component: LastValueFromExampleComponent,
      },
      { path: 'search-example', component: SearchExampleComponent },
      {
        path: 'combine-latest-power-example',
        component: CombineLatestPowerExampleComponent,
      },
      { path: 'merge-map-example', component: MergeMapExampleComponent },
      { path: 'concat-map-example', component: ConcatMapExampleComponent },
      { path: 'exhaust-map-example', component: ExhaustMapExampleComponent },
    ],
  },
  {
    path: 'change-detection',
    children: [
      {
        path: 'subscription-pitfall-example',
        component: SubscriptionPitfallScenarioComponent,
      },
      { path: 'signal-solution', component: SignalSolutionComponent },
      { path: 'lifecycle-example', component: LifecycleScenarioComponent },
      { path: 'loop-example', component: LoopScenarioComponent },
      {
        path: 'after-destroy-example',
        component: AfterDestroyScenarioComponent,
      },
      { path: 'on-push-example', component: OnPushComponent },
    ],
  },
  {
    path: 'debugging',
    children: [
      { path: 'performance-test', component: PerformanceTestComponent },
      { path: 'breakpoints', component: BreakpointsComponent },
      {
        path: 'component-state-inspector',
        component: ComponentStateInspectorComponent,
      },
      { path: 'network-monitoring', component: NetworkMonitoringComponent },
    ],
  },
  {
    path: 'resolvers-guards',
    children: [
      {
        path: 'separate-concerns',
        children: [
          { path: '', redirectTo: '1', pathMatch: 'full' },
          {
            path: ':id',
            component: SeparateConcernsComponent,
            resolve: { user: UserResolver },
          },
        ],
      },
      { path: 'error-handling', component: ErrorHandlingComponent },
      {
        path: 'deactivation-guard',
        component: DeactivationGuardComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
      {
        path: 'can-load-guard',
        loadChildren: () =>
          import('./resolvers-guards/can-load-guard/can-load-guard.module')
            .then(m => m.CanLoadGuardModule),
        canMatch: [AdminCanLoadGuard] // or canMatch, depending on your guard type
      }
      
    ],
  },
];
