import { Routes } from '@angular/router';
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
import { AdminCanLoadGuard } from './shared/guards/admin-can-load.guard';
import { UnsavedChangesGuard } from './shared/guards/unsaved-changes.guard';
import {
  ExtendedProduct,
  ProductResolver,
} from './shared/resolvers/product.resolver';
import { ProductsResolver } from './shared/resolvers/products.resolver';
import { UserResolver } from './shared/resolvers/user.resolver';
import { ProductsComponent } from './breadcrumbs-demo/products/products.component';
import { UserListComponent } from './types-and-typescript-generics/user-list/user-list.component';
import { UsersResolver } from './shared/resolvers/users.resolver';
import { TypedHttpCallsComponent } from './types-and-typescript-generics/typed-http-calls/typed-http-calls.component';
import { UnionTypesComponent } from './types-and-typescript-generics/union-types/union-types.component';
import { TypeSafeFormsComponent } from './types-and-typescript-generics/type-safe-forms/type-safe-forms.component';
import { ParentChildComponent } from './component-communication/parent-child/parent-child.component';
import { ChildParentComponent } from './component-communication/child-parent/child-parent.component';
import { SiblingViaServiceComponent } from './component-communication/sibling-via-service/sibling-via-service.component';
import { SettingVariablesFromInputComponent } from './getters-and-setters/setting-variables-from-input/setting-variables-from-input.component';
import { BuiltInPipesComponent } from './templates-and-data-binding/built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './templates-and-data-binding/custom-pipes/custom-pipes.component';
import { PanelUseCaseComponent } from './reusability/panel-use-case/panel-use-case.component';
import { StructuralDirectiveComponent } from './reusability/structural-directive/structural-directive.component';
import { SimpleFormComponent } from './reactive-forms/simple-form/simple-form.component';
import { DynamicFormComponent } from './reactive-forms/dynamic-form/dynamic-form.component';
import { CustomValidatorComponent } from './reactive-forms/custom-validator/custom-validator.component';
import { ControlContainerComponent } from './reactive-forms/control-container/control-container.component';
import { PromiseVsObservableComponent } from './rxjs/promise-vs-observable/promise-vs-observable.component';
import { ConstructorVsNgoninitComponent } from './change-detection-demo/constructor-vs-ngoninit/constructor-vs-ngoninit.component';
import { CachingComponent } from './reusability/caching/caching.component';
import { CacheInterceptorComponent } from './reusability/cache-interceptor/cache-interceptor.component';
import { InjectionTokensComponent } from './factory-pattern/injection-tokens/injection-tokens.component';
import { FacadeComponent } from './factory-pattern/facade/facade.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
      { path: 'promise-vs-observable', component: PromiseVsObservableComponent },
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
      { path: 'constructor-vs-ngoninit', component: ConstructorVsNgoninitComponent },
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
          import(
            './resolvers-guards/can-load-guard/can-load-guard.module'
          ).then((m) => m.CanLoadGuardModule),
        canMatch: [AdminCanLoadGuard], // or canMatch, depending on your guard type
      },
    ],
  },
  {
    path: 'breadcrumbs',
    children: [
      {
        path: '',
        component: BreadcrumbsHostComponent,
        data: { breadcrumb: 'Breadcrumbs' },
        children: [
          {
            path: 'products',
            component: ProductsComponent,
            data: { breadcrumb: 'Products' },
            resolve: { products: ProductsResolver },
            children: [
              {
                path: 'details/:id',
                component: ProductComponent,
                data: { breadcrumb: 'Details' },
                resolve: { product: ProductResolver },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'types-and-typescript-generics',
    children: [
      {
        path: 'generic-component',
        component: UserListComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: 'typed-http-calls',
        component: TypedHttpCallsComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: 'union-types',
        component: UnionTypesComponent,
      },
      {
        path: 'type-safe-forms',
        component: TypeSafeFormsComponent,
      },
    ],
  },
  {
    path: 'component-communication',
    children: [
      {
        path: 'parent-child',
        component: ParentChildComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: 'child-parent',
        component: ChildParentComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: 'sibling-communication',
        component: SiblingViaServiceComponent,
        resolve: { users: UsersResolver },
      },
    ],
  },
  {
    path: 'standalone-components',
    children: [
      {
        path: 'initial-setup',
        children: [
          {
            path: 'user-details/:id',
            resolve: { user: UserResolver },
            loadComponent: () =>
              import(
                './standalone-components/initial-setup/initial-setup.component'
              ).then((m) => m.InitialSetupComponent),
          },
          {
            path: '',
            redirectTo: 'user-details/1',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'component-scoped-service',
        loadComponent: () =>
          import(
            './standalone-components/component-scoped-service/component-scoped-service.component'
          ).then((m) => m.ComponentScopedServiceComponent),
      },
      {
        path: 'directives',
        loadComponent: () =>
          import(
            './standalone-components/directives/directives.component'
          ).then((m) => m.DirectivesComponent),
      },
    ],
  },
  {
    path: 'getters-and-setters',
    children: [
      {
        path: 'setting-variables-from-input',
        component: SettingVariablesFromInputComponent,
        resolve: { users: UsersResolver },
      },
    ],
  },
  {
    path: 'templates-and-data-binding',
    children: [
      {
        path: 'built-in-pipes',
        component: BuiltInPipesComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: 'custom-pipes',
        component: CustomPipesComponent,
        resolve: { users: UsersResolver },
      },
    ],
  },
  {
    path: 'reusability',
    children: [
      {
        path: 'wrapper-components',
        component: PanelUseCaseComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: 'structural-directives',
        component: StructuralDirectiveComponent,
      },
      {
        path: 'caching',
        component: CachingComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: 'cache-interceptor',
        component: CacheInterceptorComponent,
      },
    ],
  },
  {
    path: 'reactive-forms',
    children: [
      {
        path: 'simple-form',
        component: SimpleFormComponent,
      },
      {
        path: 'dynamic-form',
        component: DynamicFormComponent,
      },
      {
        path: 'custom-validators',
        component: CustomValidatorComponent,
      },
      {
        path: 'control-container',
        component: ControlContainerComponent,
      }
    ],
  },
  {
    path: 'factory-pattern',
    children: [
      {
        path: 'injection-tokens',
        component: InjectionTokensComponent,
      },
      {
        path: 'facade',
        component: FacadeComponent,
      }
    ]
  }
];
