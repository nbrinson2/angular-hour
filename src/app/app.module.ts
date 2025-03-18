import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './change-detection-demo/change-detection.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { InterferenceComponent } from './change-detection-demo/interference/interference.component';
import { OnPushComponent } from './change-detection-demo/on-push/on-push.component';
import { LifecycleScenarioComponent } from './change-detection-demo/interference/lifecycle-scenario/lifecycle-scenario.component';
import { LoopScenarioComponent } from './change-detection-demo/interference/loop-scenario/loop-scenario.component';
import { AfterDestroyScenarioComponent } from './change-detection-demo/interference/after-destroy-scenario/after-destroy-scenario.component';
import { SubscriptionPitfallScenarioComponent } from './change-detection-demo/interference/subscription-pitfall-scenario/subscription-pitfall-scenario.component';
import { SignalSolutionComponent } from './change-detection-demo/interference/signal-solution/signal-solution.component';
import { ForkJoinExampleComponent } from './rxjs/fork-join-example/fork-join-example.component';
import { FilterExampleComponent } from './rxjs/filter-example/filter-example.component';
import { SearchExampleComponent } from './rxjs/search-example/search-example.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MapExampleComponent } from './rxjs/map-example/map-example.component';
import { LastValueFromExampleComponent } from './rxjs/last-value-from-example/last-value-from-example.component';
import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    InterferenceComponent,
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
    LastValueFromExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
