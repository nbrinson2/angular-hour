import { InjectionToken, Injector, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BreadcrumbsHostComponent } from './breadcrumbs-demo/breadcrumbs-host/breadcrumbs-host.component';
import { ProductComponent } from './breadcrumbs-demo/product/product.component';
import { AfterDestroyScenarioComponent } from './change-detection-demo/after-destroy-scenario/after-destroy-scenario.component';
import { LifecycleScenarioComponent } from './change-detection-demo/lifecycle-scenario/lifecycle-scenario.component';
import { LoopScenarioComponent } from './change-detection-demo/loop-scenario/loop-scenario.component';
import { OnPushComponent } from './change-detection-demo/on-push/on-push.component';
import { SignalSolutionComponent } from './change-detection-demo/signal-solution/signal-solution.component';
import { SubscriptionPitfallScenarioComponent } from './change-detection-demo/subscription-pitfall-scenario/subscription-pitfall-scenario.component';
import { BreakpointsComponent } from './debugging/breakpoints/breakpoints.component';
import { PerformanceTestComponent } from './debugging/chrome-devtools/performance-test.component';
import { ComponentStateInspectorComponent } from './debugging/component-state-inspector/component-state-inspector.component';
import { NetworkMonitoringComponent } from './debugging/network-monitoring/network-monitoring.component';
import { HomeComponent } from './home/home.component';
import { DeactivationGuardComponent } from './resolvers-guards/deactivation-guard/deactivation-guard.component';
import { ErrorHandlingComponent } from './resolvers-guards/error-handling/error-handling.component';
import { SeparateConcernsComponent } from './resolvers-guards/separate-concerns/separate-concerns.component';
import { CombineLatestPowerExampleComponent } from './rxjs/combine-latest-power-example/combine-latest-power-example.component';
import { ConcatMapExampleComponent } from './rxjs/concat-map-example/concat-map-example.component';
import { ExhaustMapExampleComponent } from './rxjs/exhaust-map-example/exhaust-map-example.component';
import { FilterExampleComponent } from './rxjs/filter-example/filter-example.component';
import { ForkJoinExampleComponent } from './rxjs/fork-join-example/fork-join-example.component';
import { LastValueFromExampleComponent } from './rxjs/last-value-from-example/last-value-from-example.component';
import { MapExampleComponent } from './rxjs/map-example/map-example.component';
import { MergeMapExampleComponent } from './rxjs/merge-map-example/merge-map-example.component';
import { SearchExampleComponent } from './rxjs/search-example/search-example.component';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './breadcrumbs-demo/products/products.component';
import { GenericComponentComponent } from './types-and-typescript-generics/generic-component/generic-component.component';
import { UserListComponent } from './types-and-typescript-generics/user-list/user-list.component';
import { TypedHttpCallsComponent } from './types-and-typescript-generics/typed-http-calls/typed-http-calls.component';
import { UnionTypesComponent } from './types-and-typescript-generics/union-types/union-types.component';
import { StatusIndicatorComponent } from './types-and-typescript-generics/union-types/status-indicator/status-indicator.component';
import { TypeSafeFormsComponent } from './types-and-typescript-generics/type-safe-forms/type-safe-forms.component';
import { ParentChildComponent } from './component-communication/parent-child/parent-child.component';
import { ChildParentComponent } from './component-communication/child-parent/child-parent.component';
import { SiblingViaServiceComponent } from './component-communication/sibling-via-service/sibling-via-service.component';
import { SettingVariablesFromInputComponent } from './getters-and-setters/setting-variables-from-input/setting-variables-from-input.component';
import { UserInfoComponent } from './getters-and-setters/setting-variables-from-input/user-info/user-info.component';
import { BuiltInPipesComponent } from './templates-and-data-binding/built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './templates-and-data-binding/custom-pipes/custom-pipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from './reusability/panel/panel.component';
import { PanelUseCaseComponent } from './reusability/panel-use-case/panel-use-case.component';
import { StructuralDirectiveComponent } from './reusability/structural-directive/structural-directive.component';
import { SimpleFormComponent } from './reactive-forms/simple-form/simple-form.component';
import { DynamicFormComponent } from './reactive-forms/dynamic-form/dynamic-form.component';
import { CustomValidatorComponent } from './reactive-forms/custom-validator/custom-validator.component';
import { ControlContainerComponent } from './reactive-forms/control-container/control-container.component';
import { AddressEditorComponent } from './reactive-forms/control-container/address-editor/address-editor.component';
import { LoginEditorComponent } from './reactive-forms/control-container/login-editor/login-editor.component';
import { PromiseVsObservableComponent } from './rxjs/promise-vs-observable/promise-vs-observable.component';
import { ConstructorVsNgoninitComponent } from './change-detection-demo/constructor-vs-ngoninit/constructor-vs-ngoninit.component';
import { LifecycleChildComponent } from './change-detection-demo/constructor-vs-ngoninit/lifecycle-child/lifecycle-child.component';
import { CachingComponent } from './reusability/caching/caching.component';
import { CacheInterceptorComponent } from './reusability/cache-interceptor/cache-interceptor.component';
import { CacheInterceptor } from './shared/services/cache-interceptor.service';
import { DOCUMENT_STORAGE } from './shared/models/document-storage';
import { InjectionTokensComponent } from './factory-pattern/injection-tokens/injection-tokens.component';
import { DocumentStorage } from './shared/models/document-storage';
import { LocalStorageService } from './shared/services/local-storage.service';
import { S3StorageService } from './shared/services/s3-storage.service';
import { environment } from '../environments/environment';
import { FacadeComponent } from './factory-pattern/facade/facade.component';
import { STORAGE_FACTORIES, StorageFacade, StorageFactory } from './shared/utils/storage-registry';

export const S3StorageFactory: StorageFactory = {
  kind: 's3',
  create: (injector: Injector) => injector.get(S3StorageService),
};

export const LocalStorageFactory: StorageFactory = {
  kind: 'local',
  create: (injector: Injector) => injector.get(LocalStorageService),
};

export const appProviders: Provider[] = [
  { provide: STORAGE_FACTORIES, useValue: LocalStorageFactory, multi: true },
  { provide: STORAGE_FACTORIES, useValue: S3StorageFactory, multi: true },
  {
    provide: DOCUMENT_STORAGE,
    deps: [LocalStorageService, S3StorageService],
    useFactory: (
      local: LocalStorageService,
      s3: S3StorageService
    ): DocumentStorage => (environment.useMock ? local : s3),
  },
];

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
    ComponentStateInspectorComponent,
    BreakpointsComponent,
    NetworkMonitoringComponent,
    SeparateConcernsComponent,
    ErrorHandlingComponent,
    DeactivationGuardComponent,
    HomeComponent,
    ProductComponent,
    BreadcrumbsHostComponent,
    ProductsComponent,
    GenericComponentComponent,
    UserListComponent,
    TypedHttpCallsComponent,
    UnionTypesComponent,
    StatusIndicatorComponent,
    TypeSafeFormsComponent,
    ParentChildComponent,
    ChildParentComponent,
    SiblingViaServiceComponent,
    SettingVariablesFromInputComponent,
    UserInfoComponent,
    BuiltInPipesComponent,
    CustomPipesComponent,
    PanelComponent,
    PanelUseCaseComponent,
    StructuralDirectiveComponent,
    SimpleFormComponent,
    DynamicFormComponent,
    CustomValidatorComponent,
    ControlContainerComponent,
    AddressEditorComponent,
    LoginEditorComponent,
    PromiseVsObservableComponent,
    ConstructorVsNgoninitComponent,
    LifecycleChildComponent,
    CachingComponent,
    CacheInterceptorComponent,
    InjectionTokensComponent,
    FacadeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  providers: [
    ...appProviders,
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([CacheInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
