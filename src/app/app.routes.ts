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

export const routes: Routes = [
  { 
    path: 'rxjs',
    children: [
      { path: 'fork-join-example', component: ForkJoinExampleComponent },
      { path: 'filter-example', component: FilterExampleComponent },
      { path: 'map-example', component: MapExampleComponent },
      { path: 'last-value-from-example', component: LastValueFromExampleComponent },
      { path: 'search-example', component: SearchExampleComponent },
      { path: 'combine-latest-power-example', component: CombineLatestPowerExampleComponent },
      { path: 'merge-map-example', component: MergeMapExampleComponent },
      { path: 'concat-map-example', component: ConcatMapExampleComponent },
    ]
  },
  { path: 'change-detection',
    children: [
      { path: 'subscription-pitfall-example', component: SubscriptionPitfallScenarioComponent},
      { path: 'signal-solution', component: SignalSolutionComponent},
      { path: 'lifecycle-example', component: LifecycleScenarioComponent},
      { path: 'loop-example', component: LoopScenarioComponent},
      { path: 'after-destroy-example', component: AfterDestroyScenarioComponent},
      { path: 'on-push-example', component: OnPushComponent},
    ]
  },
];
