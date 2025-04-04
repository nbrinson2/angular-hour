import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { HighlightJsModule } from 'ngx-highlight-js';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AfterDestroyScenarioComponent } from './change-detection-demo/after-destroy-scenario/after-destroy-scenario.component';
import { LifecycleScenarioComponent } from './change-detection-demo/lifecycle-scenario/lifecycle-scenario.component';
import { LoopScenarioComponent } from './change-detection-demo/loop-scenario/loop-scenario.component';
import { OnPushComponent } from './change-detection-demo/on-push/on-push.component';
import { SignalSolutionComponent } from './change-detection-demo/signal-solution/signal-solution.component';
import { SubscriptionPitfallScenarioComponent } from './change-detection-demo/subscription-pitfall-scenario/subscription-pitfall-scenario.component';
import { FilterExampleComponent } from './rxjs/filter-example/filter-example.component';
import { ForkJoinExampleComponent } from './rxjs/fork-join-example/fork-join-example.component';
import { LastValueFromExampleComponent } from './rxjs/last-value-from-example/last-value-from-example.component';
import { MapExampleComponent } from './rxjs/map-example/map-example.component';
import { SearchExampleComponent } from './rxjs/search-example/search-example.component';
import { CombineLatestPowerExampleComponent } from './rxjs/combine-latest-power-example/combine-latest-power-example.component';
import { MergeMapExampleComponent } from './rxjs/merge-map-example/merge-map-example.component';
import { ConcatMapExampleComponent } from './rxjs/concat-map-example/concat-map-example.component';
import { ExhaustMapExampleComponent } from './rxjs/exhaust-map-example/exhaust-map-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerformanceTestComponent } from './debugging/chrome-devtools/performance-test.component';
import { ExampleDisplayComponent } from './shared/example-display/example-display.component';
import { ComponentStateInspectorComponent } from './debugging/component-state-inspector/component-state-inspector.component';
import { BreakpointsComponent } from './debugging/breakpoints/breakpoints.component';
import { NetworkMonitoringComponent } from './debugging/network-monitoring/network-monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    LifecycleScenarioComponent,
    LoopScenarioComponent,
    AfterDestroyScenarioComponent,
    SubscriptionPitfallScenarioComponent,
    SignalSolutionComponent,
    ForkJoinExampleComponent,
    FilterExampleComponent,
    SearchExampleComponent,
    MapExampleComponent,
    LastValueFromExampleComponent,
    CombineLatestPowerExampleComponent,
    MergeMapExampleComponent,
    ConcatMapExampleComponent,
    ExhaustMapExampleComponent,
    PerformanceTestComponent,
    ExampleDisplayComponent,
    ComponentStateInspectorComponent,
    BreakpointsComponent,
    NetworkMonitoringComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HighlightJsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
