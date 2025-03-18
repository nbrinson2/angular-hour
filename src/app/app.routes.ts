import { Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection-demo/change-detection.component';
import { AppComponent } from './app.component';
import { ForkJoinExampleComponent } from './rxjs/fork-join-example/fork-join-example.component';
import { FilterExampleComponent } from './rxjs/filter-example/filter-example.component';
import { SearchExampleComponent } from './rxjs/search-example/search-example.component';
import { MapExampleComponent } from './rxjs/map-example/map-example.component';
import { LastValueFromExampleComponent } from './rxjs/last-value-from-example/last-value-from-example.component';

export const routes: Routes = [
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'fork-join-example', component: ForkJoinExampleComponent },
  { path: 'filter-example', component: FilterExampleComponent },
  { path: 'map-example', component: MapExampleComponent },
  { path: 'last-value-from-example', component: LastValueFromExampleComponent },
  { path: 'search-example', component: SearchExampleComponent },
];