import {
  CodeSnippet,
  CodeType,
} from '../example-display/example-display.component';

export const combineLatestExampleCode = `
  export class CombineLatestPowerExampleComponent implements OnInit, OnDestroy {
    combinedValues: any[] = [];
    private onDestroy$ = new Subject<void>();
  
    ngOnInit(): void {
      const observable1 = interval(1000).pipe(
        startWith(0),
        map(val => \`Observable 1: \${val}\`)
      );
  
      const observable2 = interval(2000).pipe(
        startWith(0),
        map(val => \`Observable 2: \${val}\`)
      );
  
      const observable3 = of("Static Value").pipe(delay(3000));
  
      combineLatest([observable1, observable2, observable3])
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(values => {
          this.combinedValues = values;
        });
    }
  
    ngOnDestroy(): void {
      this.onDestroy$.next();
      this.onDestroy$.complete();
    }
  }`;

export const concatMapExampleCode = `
  export class ConcatMapExampleComponent implements OnInit {
  
    results: string[] = [];
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      const source$ = of('Request 1', 'Request 2', 'Request 3');
  
      source$.pipe(
        concatMap(val => this.mockApiCall(val))
      ).subscribe(result => {
        this.results.push(result);
        console.log(result); // Logs the results from the API calls in order
      });
    }
  
    mockApiCall(value: string) {
      const delayTime = Math.floor(Math.random() * 5000) + 1000;
      return of(\`Response for \${value}\`).pipe(delay(delayTime));
    }
  }`;

export const exhaustMapExampleCode = `
            export class ExhaustMapExampleComponent {
            
              form: FormGroup;
              submissionResults: string[] = [];
              private submit$ = new Subject<void>();
            
              constructor(private fb: FormBuilder) {
                this.form = this.fb.group({
                  name: [''],
                  email: ['']
                });
            
                // Handle form submissions using exhaustMap
                this.submit$.pipe(
                  exhaustMap(() => this.mockApiCall(this.form.value))
                ).subscribe(result => {
                  this.submissionResults.push(result);
                  console.log(result); // Logs the result of the API call
                });
              }
            
              onSubmit(): void {
                // Emit a submission event
                this.submit$.next();
              }
            
              mockApiCall(formData: any) {
                console.log('Processing submission:', formData);
                return of(\`Submission successful for \${formData.name} (\${formData.email})\`).pipe(
                  delay(3000), // Simulate a 3-second API call
                  tap(() => console.log('API call completed'))
                );
              }
            }`;

export const filterExampleCode = `
      export class FilterExampleComponent implements OnInit, OnDestroy {
        filteredValues: number[] = [];
        private onDestroy$ = new Subject<void>();
      
        constructor() {}
      
        ngOnInit(): void {
          const numbers$ = of(1, 2, 3, 4, 5, 6);
      
          numbers$
            .pipe(
              takeUntil(this.onDestroy$),
              filter((value) => value % 2 === 0)
            )
            .subscribe((filteredValue) => {
              this.filteredValues.push(filteredValue);
              console.log(filteredValue); // Logs 2, 4, 6
            });
        }
      
        ngOnDestroy(): void {
          this.onDestroy$.next();
          this.onDestroy$.complete();
        }
      }`;

export const forkJoinExampleCode = `
      export class ForkJoinExampleComponent implements OnInit {
        results!: string[];
        results2!: string;
        private onDestroy$ = new Subject<void>();
      
        constructor() {}
      
        ngOnInit(): void {
          const observable1 = of("Hello");
          const observable3 = of("!");
          const observable2 = of("World").pipe(delay(5000));
      
          forkJoin([observable1, observable2, observable3])
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((results) => {
              this.results = results;
              console.log(results); // ['Hello', 'World', '!']
            });
      
          this.results2 = "should show first";
        }
      
        ngOnDestroy(): void {
          this.onDestroy$.next();
          this.onDestroy$.complete();
        }
      }`;

export const lastValueFromExampleCode = `
      export class LastValueFromExampleComponent implements OnInit {
      
        lastValue!: string
      
        constructor() { }
      
        async ngOnInit(): Promise<void> {
          const observable$ = of('Hello', 'World', '!').pipe(delay(1000));
          this.lastValue = await lastValueFrom(observable$);
        }
      }`;

export const mapExampleCode = `
      export class MapExampleComponent implements OnInit, OnDestroy {
      
        mappedValues: number[] = [];
        private onDestroy$ = new Subject<void>();
      
        constructor() { }
      
        ngOnInit(): void {
          const numbers$ = of(1, 2, 3, 4, 5);
      
          numbers$.pipe(
            takeUntil(this.onDestroy$),
            map(value => value * 2)
          ).subscribe(mappedValue => {
            this.mappedValues.push(mappedValue);
            console.log(mappedValue); // Logs 2, 4, 6, 8, 10
          });
        }
      
        ngOnDestroy(): void {
          this.onDestroy$.next();
          this.onDestroy$.complete();
        }
      }`;

export const mergeMapExampleCode = `
        export class MergeMapExampleComponent implements OnInit, OnDestroy {
        
          mergedValues: string[] = [];
          private onDestroy$ = new Subject<void>();
        
          constructor(private http: HttpClient) { }
        
          ngOnInit(): void {
            const source$ = interval(1000).pipe(
              map(val => \`Request \${val + 1}\`), // Generate sequential request names
              mergeMap(val => this.fetchUserData(val)) // Process requests concurrently
            );
        
            source$.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
              this.mergedValues.push(value);
              console.log(value); // Logs the values from the merged observables in a random order
            });
          }
        
          fetchUserData(value: string) {
            const userId = Math.floor(Math.random() * 10) + 1; // Random user ID
            const delayTime = Math.floor(Math.random() * 5000) + 1000; // Random delay
            console.log(\`Fetching data for \${value} with delay \${delayTime}ms\`);
            return this.http.get(\`https://jsonplaceholder.typicode.com/users/\${userId}\`).pipe(
              delay(delayTime), // Simulate network latency
              map((user: any) => \`Response for \${value}: \${user.name} (User ID: \${userId})\`)
            );
          }
        
          ngOnDestroy(): void {
            this.onDestroy$.next();
            this.onDestroy$.complete();
          }
        }`;

export const searchExampleCode = `        

        export class SearchExampleComponent implements OnInit {
        
          @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
          searchResults: string[] = [];
        
          constructor(private searchService: SearchService) { }
        
            ngOnInit(): void {
              fromEvent(this.searchInput.nativeElement, 'input').pipe(
                debounceTime(600),
                distinctUntilChanged(),
                switchMap((event: any) => this.searchService.search(event.target.value))
              ).subscribe(results => {
                this.searchResults = results;
              });
            }
        }
          

        export class SearchService {
        
          private apiUrl = 'assets/mock-data.json';
        
          constructor(private http: HttpClient) { }
        
          search(term: string): Observable<string[]> {
            return this.http.get<{ items: string[] }>(this.apiUrl).pipe(
              tap(() => console.log(term)),
              map(response => response.items.filter(item => item.toLowerCase().includes(term.toLowerCase())))
            );
          }
        }`;

export const afterDestroyScenarioCode = `export class AfterDestroyScenarioComponent {
        status = 'Initializing...';
        initializedTime = '';
        destroyed = false;
      
        constructor(private cdRef: ChangeDetectorRef) {}
      
        ngOnInit() {
          console.log('🟡 ngOnInit started');
      
          setTimeout(() => {
            if (this.destroyed) {
              console.warn('⚠️ Attempted detectChanges() after destroy');
              return;
            }
      
            this.status = 'Updated in setTimeout after init';
            this.initializedTime = new Date().toLocaleTimeString();
            console.log('🟡 Async update applied');
      
            // ⚠️ Forcing detectChanges() after async update
            this.cdRef.detectChanges();
            console.log('🔄 detectChanges() called from setTimeout');
          }, 2000);
        }
      
        ngOnDestroy() {
          this.destroyed = true;
          console.log('🛑 Component destroyed');
        }
      
      
      }`;

export const lifecycleScenarioCode = `      export class LifecycleScenarioComponent implements AfterViewInit {
        status = 'Initial status';
        changeCycleCount = 0;
      
        constructor(private cdRef: ChangeDetectorRef) {}
      
        ngAfterViewInit() {
          console.log('🔵 ngAfterViewInit start');
      
          // ✅ First mutation
          this.status = 'Updated in ngAfterViewInit';
          console.log('🟡 Mutated status:', this.status);
      
          // 🔥 Forcing another change detection run
          this.cdRef.detectChanges();
          this.changeCycleCount++;
      
          console.log('🔴 Forced detectChanges() inside ngAfterViewInit');
        }
      }`;

export const loopScenarioCode = `      export class LoopScenarioComponent implements OnInit, OnDestroy {
        loopCounter = 0;
        intervalId: any;
      
        constructor(
          private cdRef: ChangeDetectorRef,
          private ngZone: NgZone
        ) {}
      
        ngOnInit() {
          this.ngZone.runOutsideAngular(() => {
            this.intervalId = setInterval(() => {
              this.loopCounter++;
              if (this.loopCounter > 5) {
                clearInterval(this.intervalId);
              } else {
                this.cdRef.detectChanges(); // ❌ Forcing heavy change detection cycles
              }
            }, 500);
          });
        }
      
        ngOnDestroy() {
          clearInterval(this.intervalId);
        }
      }`;

export const onPushScenarioCode = `export class OnPushComponent {
        counter = 0;
        intervalId: any;
      
        constructor(
          private cdRef: ChangeDetectorRef,
          private ngZone: NgZone
        ) {}
      
        start() {
          this.ngZone.runOutsideAngular(() => {
            this.intervalId = setInterval(() => {
              this.counter++;
              // Without manual change detection, the view won't update because Angular doesn't know this value changed.
            }, 1000);
          });
        }
      
        stop() {
          if (this.intervalId) {
            clearInterval(this.intervalId);
          }
        }
      
        manualDetect() {
          this.cdRef.detectChanges();
        }
      
      }
      `;

export const signalSolutionExampleCode = `export class SignalSolutionComponent {
  doubleCounter = computed(() => this.counter() * 2);
  subscription!: Subscription;

  get counter(): Signal<number> {
    return this._counter.asReadonly();
  }

  private _counter = signal<number>(0);

  constructor() {
    this.subscription = interval(1000).subscribe((value) => {
      this._counter.set( this.counter() + value);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}`;

export const subscriptionPitfallScenarioCode = `      export class SubscriptionPitfallScenarioComponent implements OnInit, OnDestroy {
        value = 0;
        subscription!: Subscription;
        destroyed = false;
      
        constructor(private cdRef: ChangeDetectorRef) {}
      
        ngOnInit() {
          console.log('🟡 Subscribing to interval');
          this.subscription = interval(1000).subscribe((count) => {
            this.value = count;
            console.log(\`🔄 Emitted value: \${this.value}\`);
          });
        }
      
        ngOnDestroy() {
          this.destroyed = true;
          // ❌ Forgot to unsubscribe! (intentional for demo purposes)
          console.warn('⚠️ Component destroyed, but subscription is still active!');
        }
      }`;

export const performanceTestCode = `
export class PerformanceTestComponent {

  performanceResultBubble: number | null = null;
  performanceResultOptimized: number | null = null;

  performanceTestCode = performanceTestCode;

  async runPerformanceTest(): Promise<void> {
    // Create an array of 10,000 random numbers.
    const array = Array.from({ length: 10000 }, () => Math.random());
    
    // Clone the array for both sorting methods.
    const bubbleSortArray = [...array];
    const optimizedSortArray = [...array];
    
    // --- Bubble Sort Measurement ---
    performance.mark('startBubbleSort');
    for (let i = 0; i < bubbleSortArray.length - 1; i++) {
      for (let j = 0; j < bubbleSortArray.length - i - 1; j++) {
        if (bubbleSortArray[j] > bubbleSortArray[j + 1]) {
          const temp = bubbleSortArray[j];
          bubbleSortArray[j] = bubbleSortArray[j + 1];
          bubbleSortArray[j + 1] = temp;
        }
      }
    }
    performance.mark('endBubbleSort');
    performance.measure('Bubble Sort Duration', 'startBubbleSort', 'endBubbleSort');
    const bubbleTime = performance.getEntriesByName('Bubble Sort Duration')[0].duration;
    
    // --- Optimized Sort Measurement ---
    performance.mark('startOptimizedSort');
    optimizedSortArray.sort((a, b) => a - b);
    performance.mark('endOptimizedSort');
    performance.measure('Optimized Sort Duration', 'startOptimizedSort', 'endOptimizedSort');
    const optimizedTime = performance.getEntriesByName('Optimized Sort Duration')[0].duration;
    
    // Update class fields so they can be inspected.
    this.performanceResultBubble = bubbleTime;
    this.performanceResultOptimized = optimizedTime;
    console.log('Bubble sort took', bubbleTime, 'ms');
    console.log('Optimized sort took', optimizedTime, 'ms');
  }
}
      `;

export const breakpointsExampleCode = `
export class BreakpointsComponent {
  fibonacciSequence: number[] = [];
  lastFibonacci: number = 0;
  primeCount: number = 0;

  breakpointsExampleCode = breakpointsExampleCode;

  runDebugFunction(): void {
    const n = 10;
    let fib: number[] = [0, 1];
    let primeCount = 0;
    
    // Initialize the UI with the first two numbers.
    this.fibonacciSequence = [0, 1];

    let i = 2;
    const addNextFib = () => {
      if (i > n) {
        // Update the remaining fields once the loop is finished.
        this.lastFibonacci = fib[n];
        this.primeCount = primeCount;
        return;
      }
      // Calculate the next Fibonacci number.
      fib[i] = fib[i - 1] + fib[i - 2];

      // Check if the current Fibonacci number is prime.
      let isPrime = true;
      if (fib[i] < 2) {
        isPrime = false;
      }
      for (let j = 2; j < fib[i]; j++) {
        if (fib[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeCount++;
      }

      // Dynamically add the computed Fibonacci number to the UI.
      this.fibonacciSequence.push(fib[i]);

      i++;
      // Use a small delay so that the UI has time to update.
      setTimeout(addNextFib, 300);
    };

    addNextFib();
  }

  clearResults(): void {
    this.fibonacciSequence = [];
    this.lastFibonacci = 0;
    this.primeCount = 0;
    console.log('Results cleared.');
  }
}`;

export const componentStateInspectorCode = `
export class ComponentStateInspectorComponent {
  currentValue: boolean = false;

  componentStateInspectorCode = componentStateInspectorCode;

  toggleValue(): void {
    this.currentValue = !this.currentValue;
    console.log('Current value toggled:', this.currentValue);
  }
}`;

export const networkMonitoringCode = `
export class NetworkMonitoringComponent {
  networkResponse: any;
  errorResponse: any;

  networkMonitoringCode = networkMonitoringCode;

  constructor(private http: HttpClient) {}

  async runNetworkRequest(): Promise<void> {
    const userId = 1;
    try {
      const response = await firstValueFrom(this.http.get(\`https://jsonplaceholder.typicode.com/users/\${userId}\`));
      this.networkResponse = response;
      console.log('Network response:', response);
    } catch (error) {
      console.error('Network error:', error);
    }
  }

  async runErrorRequest(): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.get('https://jsonplaceholder.typicode.com/nonexistent'));
      this.errorResponse = response;
      console.log('Response:', response);
    } catch (error) {
      this.errorResponse = error;
      console.error('HTTP Error:', error);
    }
  }

  clearResults(): void {
    this.networkResponse = undefined;
    this.errorResponse = undefined;
  }
}`;

export const separateConcernsCode = `
export class SeparateConcernsComponent implements OnInit {
  user!: User;
  currentUserId!: number;

  separateConcernsCode = separateConcernsCode;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.currentUserId = id ? +id : 0;
    });
  }

  viewUser(id: number): void {
    this.router.navigate(['../', id], { relativeTo: this.route });
  }

}


export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUserById(userId: string): Observable<UserResponse> {
    const response = this.http.get<UserResponse>(\`\${this.baseUrl}/\${userId}\`);
    console.log('Response:', response);
    return response;
  }
}


@Injectable({ providedIn: 'root' })
export class UserResolver {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    return this.userService.getUserById(userId!).pipe(
      map((response: UserResponse): User => ({
        fullName: response.name,
        email: response.email,
        city: response.address.city,
        company: response.company.name,
        phone: response.phone
      }))
    );
  }
}

`;

export const errorHandlingCode = `
@Injectable({ providedIn: 'root' })
export class UserResolver {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    return this.userService.getUserById(userId!).pipe(
      map(
        (response: UserResponse): User => ({
          fullName: \`\${response.name} (\${response.username})\`,
          email: response.email,
          city: response.address.city,
          company: \`\${response.company.name} - \${response.company.catchPhrase}\`,
          phone: response.phone,
        })
      ),
      catchError((error) => {
        this.router.navigate(['/resolvers-guards/error-handling']);
        return EMPTY;
      })
    );
  }
}


Routes:
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
    ],
  },
`;

export const deactivationGuardCode = `
export class DeactivationGuardComponent implements CanComponentDeactivate {
  profileForm: FormGroup;
  isSubmitted = false;

  deactivationGuardCode = deactivationGuardCode;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.profileForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  save(): void {
    this.isSubmitted = true;
    this.profileForm.markAsPristine();
    alert('Profile saved!');
  }

  canDeactivate(): boolean {
    return this.profileForm.pristine || this.isSubmitted;
  }

}


export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}


export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    if (component.canDeactivate()) {
      return true;
    }

    // 🔥 Open modal and return its result
    const dialogRef = this.dialog.open(UnsavedChangesModalComponent, {
      width: '400px',
      disableClose: true
    });

    return dialogRef.afterClosed(); // Returns Observable<boolean>
  }
}



Routes:
      {
        path: 'deactivation-guard',
        component: DeactivationGuardComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
`;

export const canLoadGuardCode = `


export class AdminCanLoadGuard implements CanMatch {
  constructor(private auth: AuthService, private router: Router) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    if (this.auth.hasRole('admin')) {
      return true;
    }

    // Redirect and block load
    this.router.navigate(['/resolvers-guards/error-handling']);
    return false;
  }
}


Routes:
      {
        path: 'can-load-guard',
        loadChildren: () =>
          import('./resolvers-guards/can-load-guard/can-load-guard.module')
            .then(m => m.CanLoadGuardModule),
        canMatch: [AdminCanLoadGuard] // or canMatch, depending on your guard type
      }
`;

export const productCode = `
export class ProductComponent {
  product: Product = {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 100,
    category: 'Category 1',
  };

  constructor() {}

  getProductDetails(): void {
    console.log('Product details:', this.product);
  }
}
`;

export const breadcrumbsCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
Routes:
  {
    path: 'breadcrumbs',
    children: [
      {
        path: '',
        component: BreadcrumbsHostComponent,
        data: { breadcrumb: 'Breadcrumbs' },
        resolve: { products: ProductsResolver },
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
                resolve: { product: ProductResolver }
              }
            ]
          }
            ],
      },
    ],
  },


export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // Subscribe to the NavigationEnd event
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    let children: ActivatedRoute[] = route.children;

    // Return the breadcrumbs if there's no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      let routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL) {
        url += \`/\${routeURL}\`;
      }

      // Use the breadcrumb from route data if available
      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, url });
      }

      // Recursively add breadcrumbs from children
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}`,
  },
  {
    type: CodeType.HTML,
    code: `<app-example-display
  title="Breadcrumbs"
  description="Demonstrates how to use breadcrumbs in Angular."
  [codeSnippet]="breadcrumbsCode"
>
  <section class="breadcrumbs-intro">
    <p>
      This example shows how to implement breadcrumbs in an Angular application.
      The breadcrumbs are dynamically generated based on the current route.
    </p>
  </section>
  
  <section class="breadcrumbs-demo">
    <app-breadcrumbs></app-breadcrumbs>
    <!-- The "Products" link will be hidden when the current route matches either the products list or any child details route -->
    <a [routerLink]="['/breadcrumbs', 'products']" routerLinkActive="hidden">
      Products
    </a>
    <router-outlet></router-outlet>
  </section>
</app-example-display>
`,
  },
];

export const genericComponentCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export class GenericComponentComponent<T> {
  @Input() items: T[] = [];
  @Input() itemDisplaySizeMulitiplier: number = 1;
  @Input() template!: TemplateRef<any>;

  get rowHeight(): number {
    return this.itemDisplaySizeMulitiplier * 200;
  }

  // Responsive number of columns for the grid.
  cols: number = 3;
}
  

export class UserListComponent implements OnInit {
  users!: User[];
  genericComponentCode: CodeSnippet[] = genericComponentCode;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
  }
}
`,
  },
  {
    type: CodeType.HTML,
    code: `

<!-- Generic Component -->
<ul>
  <li *ngFor="let item of items">
    <!-- Render the provided template with the current item as context -->
    <ng-container *ngTemplateOutlet="template; context: { $implicit: item }">
    </ng-container>
  </li>
</ul>

    
<!-- User List Component -->
<app-example-display
  title="User List with Generics"
  description="Demonstrates how to use a generic component to display a list of users with all attributes."
  [codeSnippets]="genericComponentCode"
>
  <!-- Define a template for rendering an individual user with all attributes -->
  <ng-template #userTemplate let-user>
    <mat-card class="user-card">
      <mat-card-header>
        <!-- An optional avatar using a Material icon -->
        <div mat-card-avatar class="user-avatar">
          <mat-icon aria-hidden="true">person</mat-icon>
        </div>
        <mat-card-title>{{ user.fullName }}</mat-card-title>
        <mat-card-subtitle>{{ user.email }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          <mat-icon aria-hidden="true" class="icon">location_city</mat-icon>
          <strong>City:</strong> {{ user.city }}
        </p>
        <p>
          <mat-icon aria-hidden="true" class="icon">business</mat-icon>
          <strong>Company:</strong> {{ user.company }}
        </p>
        <p>
          <mat-icon aria-hidden="true" class="icon">phone</mat-icon>
          <strong>Phone:</strong> {{ user.phone }}
        </p>
      </mat-card-content>
    </mat-card>
  </ng-template>

  <!-- Use the generic component, binding the users array and template -->
  <app-generic-component
    [items]="users"
    [itemDisplaySizeMulitiplier]="1.25"
    [template]="userTemplate"
  ></app-generic-component>
</app-example-display>

`,
  },
];

export const typedHttpCallsCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface User {
  fullName: string;
  email: string;
  city: string;
  company: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUserById(userId: string): Observable<UserResponse> {
    const response = this.http.get<UserResponse>(\`\${this.baseUrl}/\${userId}\`);
    console.log('Response:', response);
    return response;
  }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.baseUrl);
  }
}
  

@Injectable({ providedIn: 'root' })
export class UsersResolver {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers().pipe(
      map((responses: UserResponse[]) =>
        responses.map((response: UserResponse) => ({
          fullName: \`\${response.name} (\${response.username})\`,
          email: response.email,
          city: response.address.city,
          company: \`\${response.company.name} - \${response.company.catchPhrase}\`,
          phone: response.phone,
        }))
      ),
      catchError((error) => {
        this.router.navigate(['/resolvers-guards/error-handling']);
        return EMPTY;
      })
    );
  }
}`,
  },
];

export const unionTypesCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
    export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

export class UnionTypesComponent {
  unionTypesCode = unionTypesCode;
  exampleInfo: InfoItem = {
    context:
      'Union types limit a variable to a fixed set of values (e.g., "loading" | "success" | "error"), which improves safety, code clarity, and IntelliSense support.',
  };

  status: RequestStatus = 'idle';

  simulateRequest() {
    this.status = 'loading';
    setTimeout(() => {
      const success = Math.random() > 0.5;
      this.status = success ? 'success' : 'error';
    }, 2000);
  }
}


export class StatusIndicatorComponent {
  @Input() status: RequestStatus = 'idle';

  get statusLabel(): string {
    switch (this.status) {
      case 'idle': return 'Waiting...';
      case 'loading': return 'Loading...';
      case 'success': return 'Done!';
      case 'error': return 'Something went wrong.';
    }
  }

  get statusIcon(): string {
    switch (this.status) {
      case 'idle': return 'hourglass_empty';
      case 'loading': return 'autorenew';
      case 'success': return 'check_circle';
      case 'error': return 'error_outline';
    }
  }

  get statusColor(): string {
    switch (this.status) {
      case 'success': return 'primary';
      case 'error': return 'warn';
      default: return '';
    }
  }
}`,
  },
];

export const typeSafeFormsCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export interface ProfileFormValues {
  name: string;
  email: string;
  age: number;
}

export class TypeSafeFormsComponent {

form = new FormGroup<{
  name: FormControl<string>;
  email: FormControl<string>;
  age: FormControl<number | null>; // allow empty initially
}>({
  name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  age: new FormControl(null)
});

submit() {
  if (this.form.valid) {
    const values: ProfileFormValues = this.form.getRawValue();
    console.log('Form Submitted!', values);
  } else {
    console.warn('Form is invalid');
  }
}
`,
  },
];

export const parentChildCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export class ParentChildComponent {
  protected users: User[] = [];
  protected selectedUser: User | null = null;
  protected parentChildCode = parentChildCode;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.users = (data as Data).users;
    });
  }

  protected selectUser(user: User) {
    this.selectedUser = user;
  }
}
  
export class UserCardComponent {
  @Input() user!: User;
}
`,
  },
  {
    type: CodeType.HTML,
    code: `
<app-example-display
  title="Parent Child Communication"
  description="Demonstrates how to pass data from a parent component to a child component."
  [codeSnippets]="parentChildCode"
>
  <app-example-info [item]="exampleInfo"></app-example-info>

  <mat-form-field appearance="fill" class="user-dropdown">
    <mat-label>Select a user</mat-label>
    <mat-select
      [(value)]="selectedUser"
      (selectionChange)="selectUser($event.value)"
    >
      <mat-option *ngFor="let user of users" [value]="user">
        {{ user.fullName }}
      </mat-option>
    </mat-select>
  </mat-form-field>
  
  <ng-container *ngIf="selectedUser; else noSelection">
    <app-user-card [user]="selectedUser"></app-user-card>
  </ng-container>

  <ng-template #noSelection>
    <mat-card class="user-placeholder-card">
      <mat-card-content class="text-center">
        <mat-icon style="font-size: 48px; color: #ccc;">info</mat-icon>
        <p style="margin-top: 8px;">No user selected. Click a name above to see details.</p>
      </mat-card-content>
    </mat-card>
  </ng-template>
</app-example-display>`,
  },
];

export const childParentCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export class ChildParentComponent {
  get users(): Signal<User[]> {
    return this._users.asReadonly();
  }

  protected displayedColumns: string[] = [
    'fullName',
    'email',
    'city',
    'company',
    'phone',
  ];

  private _users = signal<User[]>([]);

  addUser(user: User) {
    this._users.update((users) => [...users, user]);
  }
}

export class AddUserComponent {
  @Output() userCreated = new EventEmitter<User>();

  fullName = '';
  email = '';
  city = '';
  company = '';
  phone = '';

  submitForm() {
    if (!this.fullName || !this.email) return;

    this.userCreated.emit({
      fullName: this.fullName,
      email: this.email,
      city: this.city,
      company: this.company,
      phone: this.phone,
    });

    // Clear form
    this.fullName = '';
    this.email = '';
    this.city = '';
    this.company = '';
    this.phone = '';
  }
}`,
  },
  {
    type: CodeType.HTML,
    code: `
<app-example-display
  title="Child Parent Communication"
  description="Demonstrates how to pass data from a child component to a parent component."
  [codeSnippets]="childParentCode"
>
  <app-example-info
    [heading]="'Why Child-to-Parent Communication Matters'"
    [item]="exampleInfo"
  ></app-example-info>
  <app-add-user (userCreated)="addUser($event)"></app-add-user>

  <br />
  <mat-divider></mat-divider>

  <h3>Current Users:</h3>
  <mat-table [dataSource]="users()">
    <ng-container matColumnDef="fullName">
      <mat-header-cell *matHeaderCellDef>Full Name</mat-header-cell>
      <mat-cell *matCellDef="let user">{{ user.fullName }}</mat-cell>
    </ng-container>
    <ng-container matColumnDef="email">
      <mat-header-cell *matHeaderCellDef>Email</mat-header-cell>
      <mat-cell *matCellDef="let user">{{ user.email }}</mat-cell>
    </ng-container>
    <ng-container matColumnDef="city">
      <mat-header-cell *matHeaderCellDef>City</mat-header-cell>
      <mat-cell *matCellDef="let user">{{ user.city }}</mat-cell>
    </ng-container>
    <ng-container matColumnDef="company">
      <mat-header-cell *matHeaderCellDef>Company</mat-header-cell>
      <mat-cell *matCellDef="let user">{{ user.company }}</mat-cell>
    </ng-container>
    <ng-container matColumnDef="phone">
      <mat-header-cell *matHeaderCellDef>Phone</mat-header-cell>
      <mat-cell *matCellDef="let user">{{ user.phone }}</mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>

</app-example-display>
`,
  },
];

export const siblingViaServiceCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export class SiblingViaServiceComponent {
  @ViewChild(NotificationBannerComponent)
  protected notificationBanner!: NotificationBannerComponent;

  protected message = '';

  constructor(private notificationService: NotificationService) {}

  send() {
    if (this.message.trim()) {
      this.notificationService.send(this.message);
      this.message = '';
    }
  }

  dismiss() {
    this.notificationBanner.dismiss();
  }
}

export class NotificationBannerComponent {
  protected message: string | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notification$.subscribe(msg => {
      this.message = msg;
    });
  }

  dismiss() {
    this.message = null;
  }
}
  
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string | null>(null);
  notification$ = this.notificationSubject.asObservable();

  send(message: string) {
    this.notificationSubject.next(message);
  }
}
`,
  },
  {
    type: CodeType.HTML,
    code: `
<app-example-display
  title="Sibling via Service"
  description="Demonstrates how to communicate between siblings using a service."
  [codeSnippets]="siblingViaServiceCode"
>
  <app-notification-banner></app-notification-banner>
  <br />
  <div class="notification-controls">
    <mat-form-field appearance="outline" class="message-input">
      <mat-label>Message</mat-label>
      <input
        matInput
        [(ngModel)]="message"
        placeholder="Type a notification..."
      />
    </mat-form-field>

    <div class="button-group">
      <button
        mat-flat-button
        color="primary"
        (click)="send()"
        [disabled]="!message.trim()"
      >
        Send Notification
      </button>

      <button mat-stroked-button color="warn" (click)="dismiss()">
        Dismiss Notification
      </button>
    </div>
  </div>
</app-example-display>
`,
  },
];

export const standaloneInitialSetupCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
import { Component } from '@angular/core';
import { User } from '../../shared/resolvers/user.resolver';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { standaloneInitialSetupCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-initial-setup',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './initial-setup.component.html',
  styleUrl: './initial-setup.component.scss',
})
export class InitialSetupComponent {
  protected user!: User;

  constructor(private route: ActivatedRoute) {
    this.user = this.route.snapshot.data['user'];
  }
}


// Routes:
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
            import('./standalone-components/initial-setup/initial-setup.component').then(
              (m) => m.InitialSetupComponent
            ),
        },
        {
          path: '',
          redirectTo: 'user-details/1',
          pathMatch: 'full',
        },
      ],
    },
  ],
},

`,
  },
];

export const componentScopedServiceCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export class ClickTrackerComponent {
  protected service!: ClickTrackerService;

  constructor(
    @Optional()
    @Host()
    public parentService: ClickTrackerService | null
  ) {
    console.log('ClickTrackerComponent constructor', parentService);
    this.service = parentService ?? new ClickTrackerService();
  }

  handleClick() {
    this.service.increment();
  }
}
  

import { Component } from '@angular/core';
import { componentScopedServiceCode } from '../../shared/constants/code-snippets.constants';
import { SharedModule } from "../../shared/shared.module";
import { InfoItem } from '../../shared/example-info/example-info.component';
import { ClickTrackerComponent } from '../../shared-standalone/click-tracker/click-tracker.component';
import { ParentScopedServiceComponent } from './parent-scoped-service/parent-scoped-service.component';

@Component({
  selector: 'app-component-scoped-service',
  standalone: true,
  imports: [SharedModule, ClickTrackerComponent, ParentScopedServiceComponent],
  templateUrl: './component-scoped-service.component.html',
  styleUrl: './component-scoped-service.component.scss'
})
export class ComponentScopedServiceComponent {}`,
  },
  {
    type: CodeType.HTML,
    code: `
<h3>Parent Scoped Service Demo</h3>
<div class="demo-container">
  <app-click-tracker></app-click-tracker>
  <app-click-tracker></app-click-tracker>
</div>


<app-example-display
  title="Component Scoped Service"
  description="Learn how to create a component scoped service in Angular"
  [codeSnippets]="componentScopedServiceCode"
>
  <h3>Component Scoped Service Demo</h3>
  <div class="demo-container">
    <app-click-tracker></app-click-tracker>
    <app-click-tracker></app-click-tracker>
  </div>

  <app-parent-scoped-service></app-parent-scoped-service>
</app-example-display>`,
  },
];

export const standaloneDirectivesCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  /** 
   * Input property: if set, use this color; otherwise default to yellow
   * Usage: <div appHighlight="lightblue">…</div>
   */
  @Input('appHighlight') highlightColor = 'yellow';

  /**
   * Bind to the host element’s style.backgroundColor
   * This is updated on mouseenter/mouseleave.
   */
  @HostBinding('style.backgroundColor') bgColor!: string | null;

  /** On mouseenter → set background to \`highlightColor\` */
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = this.highlightColor;
  }

  /** On mouseleave → clear background */
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = null;
  }
}


// Directives Component
import { Component } from '@angular/core';
import { HighlightDirective } from '../../shared-standalone/highlight.directive';
import { standaloneDirectivesCode } from '../../shared/constants/code-snippets.constants';
import { SharedModule } from '../../shared/shared.module';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [HighlightDirective, SharedModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {}
    `,
  },
  {
    type: CodeType.HTML,
    code: `
<mat-card class="demo-card mat-elevation-z4">
  <mat-card-header>
    <mat-card-title class="demo-title">
      Highlight Directive (Material Demo)
    </mat-card-title>
  </mat-card-header>

  <mat-card-content>
    <!-- 1) A Material list with dividers and hover‐lift animations -->
    <mat-list>
      <ng-container *ngFor="let item of items; let last = last">
        <mat-list-item [appHighlight]="'#fff59d'" class="list-item">
          {{ item }}
        </mat-list-item>
        <!-- Divider between items, except after the last -->
        <mat-divider *ngIf="!last"></mat-divider>
      </ng-container>
    </mat-list>
    

    <!-- 2) A Material button that highlights with a custom color -->
    <button
      mat-raised-button
      color="primary"
      appHighlight="#b39ddb"
      class="demo-button mat-elevation-z2"
    >
      Hover Me (Purple Highlight)
    </button>
  </mat-card-content>
</mat-card>
`,
  },
];

export const settingVariablesFromInputCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export class UserInfoComponent {
  @Input() set user(user: User) {
    this._fullName = user.fullName;
    this._lettersInName = user.fullName.length;
    this._validNameLength = user.fullName.length > 21;
  }
  @Output() userChange = new EventEmitter<void>();

  // backing fields
  private _fullName = '';
  private _lettersInName = 0;
  private _validNameLength = false;

  // render-time trackers
  lastUserRenderMs = 0;
  lastPerfRenderMs = 0;

  get fullName(): string {
    const start = performance.now();
    const name = this._fullName;
    this.lastUserRenderMs = Math.round(performance.now() - start);
    return name;
  }

  get lettersInName(): number {
    return this._lettersInName;
  }

  get validNameLength(): boolean {
    return this._validNameLength;
  }

  get heavyValue(): number {
    const start = performance.now();
    let sum = 0;
    for (let i = 0; i < 200_000_000; i++) {
      sum += i;
    }
    this.lastPerfRenderMs = Math.round(performance.now() - start);
    return sum;
  }

  onUserChange(): void {
    this.userChange.emit();
  }
}
    `,
  },
  {
    type: CodeType.HTML,
    code: `
<div class="container">
  <!-- User Info Card -->
  <mat-card class="user-info-card mat-elevation-z4">
    <mat-card-header>
      <div mat-card-avatar>
        <mat-icon aria-label="User icon">account_circle</mat-icon>
      </div>
      <mat-card-title>{{ fullName }}</mat-card-title>
      <mat-card-subtitle>Letters: {{ lettersInName }}</mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      <p [ngClass]="validNameLength ? 'valid' : 'invalid'">
        {{ fullName }} is <strong>{{ validNameLength ? 'valid' : 'invalid' }}</strong>.
      </p>
    </mat-card-content>

    <mat-card-actions align="end">
      <button mat-icon-button (click)="onUserChange()" aria-label="Refresh user">
        <mat-icon>refresh</mat-icon>
      </button>
      <span class="render-time">⏱ {{ lastUserRenderMs }} ms</span>
    </mat-card-actions>
  </mat-card>

  <!-- Performance Demo Card -->
  <mat-card class="performance-card mat-elevation-z4">
    <mat-card-header>
      <mat-card-title>Performance Demo</mat-card-title>
    </mat-card-header>

    <mat-card-content>
      <p>Heavy calc: <strong>{{ heavyValue }}</strong></p>
      <p class="warning">
        ⚠️ Putting expensive work in a getter runs every CD cycle and slows you down.
      </p>
    </mat-card-content>

    <mat-card-actions align="end">
      <span class="render-time">⏱ {{ lastPerfRenderMs }} ms</span>
    </mat-card-actions>
  </mat-card>
</div>    
    `,
  },
];

export const builtInPipesCode: CodeSnippet[] = [
  {
    type: CodeType.HTML,
    code: `
  <div class="card-grid">
    <!-- DatePipe -->
    <mat-card class="pipes-card">
      <h2>DatePipe</h2>
      <ul class="pipe-list">
        <li><strong>Default:</strong> {{ today | date }}</li>
        <li><strong>Full Date:</strong> {{ today | date : 'fullDate' }}</li>
        <li><strong>Short Date:</strong> {{ today | date : 'shortDate' }}</li>
      </ul>
    </mat-card>

    <!-- CurrencyPipe -->
    <mat-card class="pipes-card">
      <h2>CurrencyPipe</h2>
      <ul class="pipe-list">
        <li><strong>USD:</strong> {{ price | currency : 'USD' }}</li>
        <li><strong>Euro:</strong> {{ price | currency : 'EUR' : 'symbol' : '1.0-0' }}</li>
      </ul>
    </mat-card>

    <!-- PercentPipe -->
    <mat-card class="pipes-card">
      <h2>PercentPipe</h2>
      <ul class="pipe-list">
        <li><strong>Raw:</strong> {{ conversionRate }}</li>
        <li><strong>Percent:</strong> {{ conversionRate | percent : '1.1-2' }}</li>
      </ul>
    </mat-card>

    <!-- DecimalPipe -->
    <mat-card class="pipes-card">
      <h2>DecimalPipe</h2>
      <ul class="pipe-list">
        <li><strong>Default:</strong> {{ quantity | number }}</li>
        <li><strong>Custom:</strong> {{ quantity | number : '1.2-2' }}</li>
      </ul>
    </mat-card>

    <!-- Case Pipes -->
    <mat-card class="pipes-card">
      <h2>Case Pipes</h2>
      <ul class="pipe-list">
        <li><strong>Uppercase:</strong> {{ greeting | uppercase }}</li>
        <li><strong>Lowercase:</strong> {{ greeting | lowercase }}</li>
        <li><strong>Title Case:</strong> {{ greeting | titlecase }}</li>
      </ul>
    </mat-card>

    <!-- JsonPipe -->
    <mat-card class="pipes-card">
      <h2>JsonPipe</h2>
      <pre class="json-output">{{ user | json }}</pre>
    </mat-card>

    <!-- SlicePipe -->
    <mat-card class="pipes-card">
      <h2>SlicePipe</h2>
      <ul class="pipe-list">
        <li><strong>First 2 Items:</strong> {{ items | slice : 0 : 2 }}</li>
        <li><strong>Last Item:</strong> {{ items | slice : -1 }}</li>
      </ul>
    </mat-card>

    <!-- Product Card -->
    <mat-card class="pipes-card">
      <h2>Product Card</h2>
      <ul class="pipe-list">
        <li><strong>Name:</strong> {{ product.name | uppercase }}</li>
        <li><strong>Price:</strong> {{ product.price | currency }}</li>
        <li><strong>Release Date:</strong> {{ product.releaseDate | date : 'longDate' }}</li>
      </ul>
    </mat-card>
  </div>

    `,
  },
];

export const customPipesCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
@Pipe({ name: 'pluralize' })
export class PluralizePipe implements PipeTransform {
  transform(value: number, singular: string, plural?: string): string {
    const word = value === 1 ? singular : (plural || singular + 's');
    return \`\${value} \${word}\`;
  }
}


@Pipe({ name: 'statusClass' })
export class StatusClassPipe implements PipeTransform {
  transform(status: string): string {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'pending':
        return 'status-pending';
      case 'inactive':
        return 'status-inactive';
      default:
        return 'status-unknown';
    }
  }
}


@Pipe({ name: 'unslug' })
export class UnslugPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.replace(/[-_]/g, ' ').replace(/\\b\\w/g, c => c.toUpperCase());
  }
}

    `,
  },
  {
    type: CodeType.HTML,
    code: `
  <div class="card-container">
    <mat-card class="pipes-card">
      <h2>Custom Pipe: Unslug</h2>
      <ul class="pipe-list">
        <li><strong>Raw:</strong> {{ routeName }}</li>
        <li><strong>Readable:</strong> {{ routeName | unslug }}</li>
      </ul>
    </mat-card>
    <mat-card class="pipes-card">
      <h2>Custom Pipe: Pluralize</h2>
      <ul class="pipe-list">
        <li><strong>Comments (0):</strong> {{ 0 | pluralize : "comment" }}</li>
        <li><strong>Comments (1):</strong> {{ 1 | pluralize : "comment" }}</li>
        <li><strong>Comments (3):</strong> {{ 3 | pluralize : "comment" }}</li>
        <li>
          <strong>Custom Plural:</strong>
          {{ 2 | pluralize : "person" : "people" }}
        </li>
      </ul>
    </mat-card>
    <mat-card class="pipes-card status-card">
      <h2>Custom Pipe: StatusClass</h2>

      <div class="status-section">
        <span class="status-text"><strong>Current Status:</strong></span>
        <mat-chip [@statusChange]="statusKey" selected>
          <span [ngClass]="status | statusClass">{{ status }}</span>
        </mat-chip>
      </div>

      <div class="status-section">
        <span class="status-text"><strong>Status History:</strong></span>
        <mat-chip-listbox class="history-chips">
          <mat-chip
            *ngFor="
              let s of statusHistory | slice : 0 : 3;
              trackBy: trackByStatus;
              let i = index
            "
            [@singleChipSlide]="i === 0 ? statusHistoryAnimationState : null"
          >
            <span [ngClass]="s | statusClass">{{ s }}</span>
          </mat-chip>
          <ng-container *ngIf="statusHistory.length === 0">
            <mat-chip disabled>No history yet</mat-chip>
          </ng-container>
        </mat-chip-listbox>
      </div>

      <mat-card-actions>
        <button
          mat-raised-button
          color="accent"
          class="status-btn"
          (click)="changeStatus()"
        >
          Change Status
        </button>
      </mat-card-actions>
    </mat-card>
  </div>

    `,
  },
];

export const panelUseCaseCode: CodeSnippet[] = [
  {
    type: CodeType.HTML,
    code: `
<!-- panel.component.html -->
<div class="panel">
  <div class="panel-header">
    {{ title }}
  </div>
  <div class="panel-body">
    <ng-content></ng-content>
  </div>
</div>

<!-- panel-use-case.component.html -->
<app-example-display
  title="Panel Use Case"
  description="Create a generic “Panel” that wraps any inner markup under a header."
  [codeSnippets]="panelUseCaseCode"
>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <app-panel header="User Details">
      <p><strong>Name:</strong> {{ user.fullName }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </app-panel>

    <app-panel header="Tasks">
      <ul>
        <li *ngFor="let task of tasks">{{ task }}</li>
      </ul>
    </app-panel>
  </div>
</app-example-display>
`,
  },
];

export const structuralDirectivesCode: CodeSnippet[] = [
  {
    type: CodeType.HTML,
    code: `
<app-example-display
  title="Structural Directives"
  description="Structural directives are Angular’s way to modify the DOM layout."
  [codeSnippets]="structuralDirectivesCode"
>
  <!-- In any template -->
  <button appTooltip="Click to save">💾 Save</button>
  <a href="#" appTooltip="Go to profile">Profile</a>
</app-example-display>
`,
  },
  {
    type: CodeType.TS,
    code: `
@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective implements OnDestroy {
  @Input('appTooltip') text = '';

  private tooltipEl: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  show() {
    if (this.tooltipEl) return;

    // 1) Create tooltip element
    this.tooltipEl = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipEl, 'app-tooltip');
    this.renderer.appendChild(
      this.tooltipEl,
      this.renderer.createText(this.text)
    );

    // 2) Position it
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = { width: 0, height: 0 };
    this.renderer.appendChild(document.body, this.tooltipEl);
    tooltipPos.width = this.tooltipEl?.offsetWidth ?? 0;
    tooltipPos.height = this.tooltipEl?.offsetHeight ?? 0;

    const top = hostPos.top - tooltipPos.height - 6;
    const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;

    this.renderer.setStyle(this.tooltipEl, 'top', \`\${top}px\`);
    this.renderer.setStyle(this.tooltipEl, 'left', \`\${left}px\`);
    this.renderer.setStyle(this.tooltipEl, 'position', 'absolute');
  }

  @HostListener('mouseleave')
  hide() {
    if (this.tooltipEl) {
      this.renderer.removeChild(document.body, this.tooltipEl);
      this.tooltipEl = null;
    }
  }

  ngOnDestroy() {
    this.hide();
  }
}
    
    `,
  },
];

export const simpleFormCode: CodeSnippet[] = [
  {
    type: CodeType.HTML,
    code: `
<mat-card class="user-form-card mat-elevation-z4">
  <mat-card-header>
    <mat-card-title>
      <mat-icon>person</mat-icon>
      User Information
    </mat-card-title>
  </mat-card-header>

  <mat-card-content>
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Name</mat-label>
        <mat-icon matPrefix>person</mat-icon>
        <input
          matInput
          formControlName="fullName"
          placeholder="John Doe"
          aria-required="true"
        />
        <mat-hint align="start">Your full name</mat-hint>
        <mat-error *ngIf="userForm.get('fullName')?.hasError('required')">
          Name is required
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Email</mat-label>
        <mat-icon matPrefix>email</mat-icon>
        <input
          matInput
          formControlName="email"
          placeholder="you@example.com"
          aria-required="true"
        />
        <mat-hint align="start">We’ll never share your email</mat-hint>
        <mat-error *ngIf="userForm.get('email')?.hasError('required')">
          Email is required
        </mat-error>
        <mat-error *ngIf="userForm.get('email')?.hasError('email')">
          Enter a valid email
        </mat-error>

      </mat-form-field>

      <div class="actions">
        <button
          mat-raised-button
          color="primary"
          type="submit"
          [disabled]="userForm.invalid || loading"
        >
          <mat-progress-spinner
            *ngIf="loading"
            mode="indeterminate"
            diameter="20"
          ></mat-progress-spinner>
          <span *ngIf="!loading">Submit</span>
        </button>
      </div>
    </form>
  </mat-card-content>
</mat-card>


`,
  },
  {
    type: CodeType.TS,
    code: `
export class SimpleFormComponent {
  protected userForm!: FormGroup;
  protected loading = false;
  
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
    this.loading = true;

    // simulate a submit call
    setTimeout(() => {
      this.loading = false;
      this.snackBar.open('User information saved', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
      });
      this.userForm.reset();
    }, 1500);
  }
}

`,
  },
];

export const dynamicFormCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
interface HeroFormControls {
  heroName: FormControl<string>;
  aliases: FormArray<FormControl<string>>;
}

export class DynamicFormComponent {
  get aliases(): FormArray<FormControl<string>> {
    return this.heroForm.controls.aliases;
  }

  protected heroForm!: FormGroup<HeroFormControls>;

  protected dynamicFormCode = dynamicFormCode;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group<HeroFormControls>({
      heroName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      aliases: this.fb.array<FormControl<string>>(
        [ new FormControl('', { nonNullable: true, validators: [Validators.required] }) ]
      )
    });
  }

  addAlias(): void {
    this.aliases.push(new FormControl('', { nonNullable: true, validators: [Validators.required] }));
  }

  removeAlias(index: number): void {
    this.aliases.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.heroForm.value);
  }
}
    `,
  },
  {
    type: CodeType.HTML,
    code: `
<mat-card class="hero-form-card mat-elevation-z4">
  <mat-card-header>
    <mat-card-title>
      <mat-icon>supervisor_account</mat-icon>
      Hero Profile
    </mat-card-title>
  </mat-card-header>

  <mat-card-content>
    <form [formGroup]="heroForm" (ngSubmit)="onSubmit()">
      <!-- Hero Name -->
      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Hero Name</mat-label>
        <input
          matInput
          placeholder="Enter hero name"
          formControlName="heroName"
          aria-required="true"
        />
        <mat-error *ngIf="heroForm.get('heroName')?.hasError('required')">
          Name is required
        </mat-error>
      </mat-form-field>

      <!-- Aliases Array -->
      <div formArrayName="aliases">
        <div
          *ngFor="let aliasCtrl of aliases.controls; let i = index"
          class="alias-row"
        >
          <mat-form-field appearance="fill" class="alias-field">
            <mat-label>Alias {{ i + 1 }}</mat-label>
            <input
              matInput
              placeholder="Enter alias"
              [formControlName]="i"
              aria-required="true"
            />
            <mat-error *ngIf="aliasCtrl.invalid">
              Alias is required
            </mat-error>
          </mat-form-field>

          <button
            mat-icon-button
            color="warn"
            aria-label="Remove alias"
            (click)="removeAlias(i)"
            *ngIf="aliases.length > 1"
          >
            <mat-icon>remove_circle</mat-icon>
          </button>
        </div>
      </div>

      <!-- Actions -->
      <div class="actions">
        <button
          mat-stroked-button
          color="accent"
          type="button"
          (click)="addAlias()"
        >
          <mat-icon>add_circle</mat-icon>
          Add Alias
        </button>

        <button
          mat-raised-button
          color="primary"
          type="submit"
          [disabled]="heroForm.invalid"
        >
          <mat-icon>save</mat-icon>
          Save Hero
        </button>
      </div>
    </form>
  </mat-card-content>
</mat-card>

    `,
  },
];

export const customValidatorCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export function noSpaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hasSpace = /\s/.test(control.value as string);
    return hasSpace
      ? { noSpace: { message: 'Spaces are not allowed' } }
      : null;
  };
}


interface CustomValidatorForm {
  username: FormControl<string>;
  email: FormControl<string>;
}


export class CustomValidatorComponent {
  protected form!: FormGroup<CustomValidatorForm>;

  protected customValidatorCode = customValidatorCode;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group<CustomValidatorForm>({
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, noSpaceValidator()],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
`,
  },
  {
    type: CodeType.HTML,
    code: `
<mat-card class="custom-form mat-elevation-z2">
  <mat-card-title>Sign Up</mat-card-title>
  <mat-card-content>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Username</mat-label>
        <input matInput formControlName="username"/>
        <mat-error *ngIf="form.controls.username.hasError('required')">
          Username is required
        </mat-error>
        <mat-error *ngIf="form.controls.username.hasError('noSpace')">
          {{ form.controls.username.getError("noSpace")?.message }}
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Email</mat-label>
        <input
          matInput
          formControlName="email"
          placeholder="you@example.com"
        />
        <mat-error *ngIf="form.controls.email.hasError('required')">
          Email is required
        </mat-error>
        <mat-error *ngIf="form.controls.email.hasError('email')">
          Enter a valid email
        </mat-error>
      </mat-form-field>

      <button
        mat-raised-button
        color="primary"
        type="submit"
        [disabled]="form.invalid"
      >
        Sign Up
      </button>
    </form>
  </mat-card-content>
</mat-card>
`,
  },
];

export const controlContainerCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
// control-container.component.ts
export class ControlContainerComponent {
  protected controlContainerCode = controlContainerCode;

  protected userForm!: FormGroup<ControlContainerForm>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group<ControlContainerForm>({
      name:    new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      child1:  this.fb.group({
        address: this.fb.group({
          street: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
          city:   new FormControl('', { nonNullable: true, validators: [Validators.required] })
        })
      }),
      child2:  this.fb.group({
        login: this.fb.group({
          username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
          password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] })
        })
      })
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}


// address-editor.component.ts
@Component({
  selector: 'app-address-editor',
  templateUrl: './address-editor.component.html',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupName }
  ],
  styleUrl: './address-editor.component.scss'
})
export class AddressEditorComponent {
  // Inject the parent FormGroupDirective
  constructor(private controlContainer: ControlContainer) {}

  // Expose the current FormGroup (the 'address' group)
  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  // Helper to grab a control by name
  get(controlName: string) {
    return this.formGroup.get(controlName);
  }
}


// login-editor.component.ts
@Component({
  selector: 'app-login-editor',
  templateUrl: './login-editor.component.html',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupName }
  ],
  styleUrl: './login-editor.component.scss'
})
export class LoginEditorComponent {
  constructor(private controlContainer: ControlContainer) {}

  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  get(controlName: string) {
    return this.formGroup.get(controlName);
  }
}

`,
  },
  {
    type: CodeType.HTML,
    code: `
<!-- control-container.component.html -->
  <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
    <!-- Parent-level field -->
    <mat-form-field appearance="fill" class="full-width">
      <mat-label>Name</mat-label>
      <input matInput formControlName="name" placeholder="Your name" />
      <mat-error *ngIf="userForm.get('name')?.hasError('required')">
        Name is required
      </mat-error>
    </mat-form-field>

    <!-- Child1: Address -->
    <div formGroupName="child1" class="full-width">
      <div formGroupName="address">
        <app-address-editor></app-address-editor>
      </div>
    </div>

    <!-- Child2: Login -->
    <div formGroupName="child2" class="full-width">
      <div formGroupName="login">
        <app-login-editor></app-login-editor>
      </div>
    </div>

    <button
      mat-raised-button
      color="primary"
      type="submit"
      [disabled]="userForm.invalid"
    >
      Submit All
    </button>
  </form>


<!-- address-editor.component.html -->
<mat-card class="section-card mat-elevation-z2" [formGroup]="formGroup">
  <mat-card-header>
    <mat-card-title>
      <mat-icon>home</mat-icon>
      Address
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <div class="two-col">
      <mat-form-field appearance="outline" class="col">
        <mat-label>Street</mat-label>
        <input matInput formControlName="street" />
        <mat-error *ngIf="get('street')?.hasError('required')">
          Street is required
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="outline" class="col">
        <mat-label>City</mat-label>
        <input matInput formControlName="city" />
        <mat-error *ngIf="get('city')?.hasError('required')">
          City is required
        </mat-error>
      </mat-form-field>
    </div>
  </mat-card-content>
</mat-card>



<!-- login-editor.component.html -->
<mat-card class="section-card mat-elevation-z2" [formGroup]="formGroup">
  <mat-card-header>
    <mat-card-title>
      <mat-icon>vpn_key</mat-icon>
      Login
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <div class="two-col">
      <mat-form-field appearance="outline" class="col">
        <mat-label>Username</mat-label>
        <input matInput formControlName="username" />
        <mat-error *ngIf="get('username')?.hasError('required')">
          Username is required
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="outline" class="col">
        <mat-label>Password</mat-label>
        <input matInput type="password" formControlName="password" />
        <mat-error *ngIf="get('password')?.hasError('required')">
          Password is required
        </mat-error>
        <mat-error *ngIf="get('password')?.hasError('minlength')">
          Minimum 6 characters
        </mat-error>
      </mat-form-field>
    </div>
  </mat-card-content>
</mat-card>

`,
  },
];

export const promiseVsObservableCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
// user.service.ts
getUserWithPromise(): Promise<string> {
  return firstValueFrom(this.http.get<{ name: string }>(\`\${this.baseUrl}/1\`)).then(
    (response) => response.name
  );
}


export class PromiseVsObservableComponent {
  protected promiseResult: string | null = null;
  protected loadingPromise = false;

  /** Observable stream state */
  protected streamValues: number[] = [];
  protected streaming = false;
  private streamSub?: Subscription;

  constructor(private userService: UserService) {}

  ngOnDestroy(): void {
    this.streamSub?.unsubscribe();
  }

  protected fetchPromise(): void {
    this.loadingPromise = true;
    this.userService.getUserWithPromise()
      .then(name => (this.promiseResult = name))
      .catch(err => console.error(err))
      .finally(() => this.loadingPromise = false);
  }

  // Observable: emit count every second, up to 10 values
  protected startStream() {
    this.streaming = true;
    this.streamValues = [];
    this.streamSub = interval(1000)
      .pipe(
        map(i => i + 1), // start at 1
        take(10)
      )
      .subscribe({
        next: (v) => this.streamValues.push(v),
        error: () => {},
        complete: () => (this.streaming = false),
      });
  }

  protected stopStream() {
    this.streamSub?.unsubscribe();
    this.streaming = false;
  }

  protected trackByValue(index: number, value: number): number {
    return value;
  }
}
`,
  },
  {
    type: CodeType.HTML,
    code: `
<div class="demo-container">
  <!-- Promise Section -->
  <section class="demo-section promise-section">
    <div class="section-header">
      <mat-icon class="section-icon">schedule</mat-icon>
      <h3>Promise - Single Value</h3>
      <p class="section-description">One-time execution with a single result</p>
    </div>

    <div class="content-area">
      <div class="button-container">
        <button
          mat-raised-button
          color="primary"
          (click)="fetchPromise()"
          [disabled]="loadingPromise"
          class="action-button"
        >
          <mat-icon *ngIf="!loadingPromise">cloud_download</mat-icon>
          <mat-progress-spinner
            *ngIf="loadingPromise"
            mode="indeterminate"
            diameter="20"
            class="button-spinner"
          >
          </mat-progress-spinner>

          <span>{{ loadingPromise ? 'Loading...' : 'Fetch Value Once' }}</span>
        </button>
      </div>

      <div class="result-container" *ngIf="promiseResult || loadingPromise">
        <mat-card class="result-card" [@fadeInUp]>
          <mat-card-header>
            <mat-icon mat-card-avatar class="result-icon">check_circle</mat-icon>
            <mat-card-title>Promise Result</mat-card-title>
            <mat-card-subtitle>Single value response</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="result-value" *ngIf="promiseResult">
              <span class="value-label">Value:</span>
              <span class="value-text">{{ promiseResult }}</span>
            </div>
            <div class="loading-placeholder" *ngIf="loadingPromise">
              <mat-progress-bar mode="indeterminate"></mat-progress-bar>
              <p>Fetching data...</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  </section>

  <!-- Observable Section -->
  <section class="demo-section observable-section">
    <div class="section-header">
      <mat-icon class="section-icon">stream</mat-icon>
      <h3>Observable - Stream</h3>
      <p class="section-description">Continuous stream with multiple emissions</p>
    </div>

    <div class="content-area">
      <div class="button-container">
        <button
          mat-raised-button
          color="accent"
          (click)="startStream()"
          [disabled]="streaming"
          class="action-button"
        >
          <mat-icon *ngIf="!streaming">play_arrow</mat-icon>
          <mat-progress-spinner
            *ngIf="streaming"
            mode="indeterminate"
            diameter="20"
            class="button-spinner"
          >
          </mat-progress-spinner>
          <span>{{ streaming ? 'Streaming...' : 'Start Stream' }}</span>
        </button>

        <button
          mat-stroked-button
          color="warn"
          (click)="stopStream()"
          [disabled]="!streaming"
          class="action-button secondary"
        >
          <mat-icon>stop</mat-icon>
          <span>Stop Stream</span>
        </button>
      </div>

      <div class="result-container" *ngIf="streamValues.length > 0 || streaming">
        <mat-card class="result-card stream-card" [@fadeInUp]>
          <mat-card-header>
            <mat-icon mat-card-avatar class="result-icon">timeline</mat-icon>
            <mat-card-title>Observable Stream</mat-card-title>
            <mat-card-subtitle>{{ streamValues.length }} values received</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="stream-values" *ngIf="streamValues.length > 0">
              <div class="values-grid">
                <div 
                  *ngFor="let value of streamValues; trackBy: trackByValue" 
                  class="value-item"
                  [@valueSlideIn]
                >
                  <span class="value-number">{{ value }}</span>
                </div>
              </div>
            </div>
            <div class="streaming-indicator" *ngIf="streaming">
              <mat-progress-bar mode="indeterminate"></mat-progress-bar>
              <p>Receiving stream data...</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  </section>
</div>
`,
  },
];

export const constructorVsNgoninitCode: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
// Parent Component
export class ConstructorVsNgoninitComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  constructor() {
    console.log('Parent: Constructor');
  }

  ngOnInit(): void {
    console.log('Parent: ngOnInit');
    // Simulate a change after init
    setTimeout(() => {
      this.childTitle = 'Updated Title After Init';
    }, 2000);
  }

  ngAfterContentInit(): void {
    console.log('Parent: ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('Parent: ngAfterViewInit');
  }
}


// Child Component
export class LifecycleChildComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit {
  @Input() title = '';
  @ViewChild('childParagraph') paragraphEl!: ElementRef;
  protected highlight = false;

  constructor() {
    console.log('Child: Constructor');
  }

  ngOnInit(): void {
    console.log('Child: ngOnInit');
    // ❌ This will be undefined at this point
    console.log('Child: ngOnInit paragraphEl?', this.paragraphEl);
  }

  ngAfterContentInit(): void {
    console.log('Child: ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('Child: ngAfterViewInit');
    console.log('Child: paragraphEl content:', this.paragraphEl.nativeElement.textContent);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child: ngOnChanges', changes);
  }

  protected toggleHighlight(): void {
    this.highlight = !this.highlight;
    const el = this.paragraphEl.nativeElement as HTMLElement;
    if (this.highlight) {
      el.style.backgroundColor = 'yellow';
    } else {
      el.style.backgroundColor = '';
    }
  }
}
  `,
  },
  {
    type: CodeType.HTML,
    code: `
<!-- Parent Component -->
<app-lifecycle-child>
  <p>This is projected content from the parent component!</p>
</app-lifecycle-child>

<app-comparison-table
  [columns]="comparisonColumns"
  [rows]="comparisonRows"
></app-comparison-table>


<!-- Child Component -->
<mat-card class="lifecycle-card">
  <mat-card-header>
    <mat-card-title>{{ title }}</mat-card-title>
  </mat-card-header>

  <mat-card-content>
    <p #childParagraph class="content-paragraph">
      I'm the child component content
    </p>

    <ng-content></ng-content>
  </mat-card-content>

  <mat-card-actions align="end">
    <button mat-raised-button color="primary" (click)="toggleHighlight()">
      <mat-icon>{{ highlight ? 'highlight_off' : 'highlight' }}</mat-icon>
      Toggle Highlight
    </button>
  </mat-card-actions>
</mat-card>
    `,
  },
];

export const cachingCodeSnippets: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export class CacheService {
  private cache = new Map<string, HttpResponse<unknown>>();

  getCacheList(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Retrieve a cached HttpResponse<T> by key.
   * Returns a cloned response of the correct type, or null if missing.
   */
  get<T>(key: string): HttpResponse<T> | null {
    const cached = this.cache.get(key);
    return cached
      ? (cached.clone() as HttpResponse<T>)
      : null;
  }

  /**
   * Cache an HttpResponse<T> under the given key.
   * We clone to avoid mutating the original.
   */
  put<T>(key: string, response: HttpResponse<T>): void {
    this.cache.set(key, response.clone() as HttpResponse<unknown>);
  }

  /**
   * Check presence of a key in the cache.
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }

  /**
   * Clear all cached entries.
   */
  clear(): void {
    this.cache.clear();
  }
}


export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
    private cache: CacheService
  ) {}

  getUserById(userId: string): Observable<UserResponse> {
    const key = \`user-\${userId}\`;
    if (this.cache.has(key)) {
      // Pull the cached HttpResponse<T> and return its body
      const cachedResponse = this.cache.get<UserResponse>(key)!;
      return of(cachedResponse.body!);
    }

    return this.http
      .get<UserResponse>(\`\${this.baseUrl}/\${userId}\`, { observe: 'response' })
      .pipe(
        tap(response => this.cache.put(key, response)),
        map(response => response.body!)
      );
  }

  getUsers(): Observable<UserResponse[]> {
    const key = 'users';
    if (this.cache.has(key)) {
      const cachedResponse = this.cache.get<UserResponse[]>(key)!;
      return of(cachedResponse.body!);
    }

    return this.http
      .get<UserResponse[]>(this.baseUrl, { observe: 'response' })
      .pipe(
        tap(response => this.cache.put(key, response)),
        map(response => response.body!)
      );
  }

  // Promise<string> (unchanged)
  getUserWithPromise(): Promise<string> {
    return firstValueFrom(
      this.http.get<{ name: string }>(\`\${this.baseUrl}/1\`)
    ).then(resp => resp.name);
  }

  // Observable<string> (unchanged)
  getUserWithObservable(): Observable<string> {
    return this.http
      .get<{ name: string }>(\`\${this.baseUrl}/1\`)
      .pipe(map(r => r.name));
  }
}

`,
  },
];

export const cacheInterceptorCodeSnippets: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
// app.module.ts
providers: [
  provideAnimationsAsync(),
  provideHttpClient(
    withInterceptors([CacheInterceptor])
  ),
],


export const CacheInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>, 
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const cacheService = inject(CacheService);
  
  // Only cache GET requests
  if (req.method !== 'GET') {
    return next(req);
  }

  console.log(\`🔍 Cache Interceptor: Checking cache for \${req.urlWithParams}\`);
  
  const cachedResponse = cacheService.get(req.urlWithParams) as HttpResponse<unknown> | null;
  if (cachedResponse) {
    console.log(\`✅ Cache Interceptor: Returning cached response for \${req.urlWithParams}\`);
    // Return a cloned response of the correct type
    return of(cachedResponse.clone());
  }

  console.log(\`❌ Cache Interceptor: No cache found, making HTTP request for \${req.urlWithParams}\`);

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log(\`💾 Cache Interceptor: Caching response for \${req.urlWithParams}\`);
        // Cache the response (typed)
        cacheService.put(req.urlWithParams, event.clone());
      }
    })
  );
};


export class CacheInterceptorComponent {
  protected cacheInterceptorCodeSnippets = cacheInterceptorCodeSnippets;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'First loadPosts()',
        description: 'Interceptor lets request through, caches HttpResponse.'
      },
      {
        label: 'Second loadPosts()',
        description: 'Interceptor finds cache and returns instantly.'
      },
      {
        label: 'clearCache()',
        description: 'Allows you to purge everything when you need fresh data.'
      }
    ]
  };
  
  protected posts$!: Observable<Post[]>;
  protected loading = false;

  constructor(
    private http: HttpClient,
    private cacheService: CacheService
  ) {}

  loadPosts(): void {
    this.loading = true;
    this.posts$ = this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    this.posts$.subscribe(() => (this.loading = false));
  }

  protected clearCache(): void {
    console.log('Clearing cache: ', this.cacheService.getCacheList());
    this.cacheService.clear();
    console.log('Cleared cache: ', this.cacheService.getCacheList());
  }
}
`,
  },
  {
    type: CodeType.HTML,
    code: `
<div class="container">
  <div class="controls">
    <button
      mat-flat-button
      color="accent"
      (click)="loadPosts()"
      [disabled]="loading"
    >
      <mat-progress-spinner
        *ngIf="loading"
        mode="indeterminate"
        diameter="20"
      ></mat-progress-spinner>
      <span *ngIf="!loading">Load Posts</span>
    </button>

    <!-- Moved Clear Cache here -->
    <button
      mat-flat-button
      color="warn"
      (click)="clearCache()"
      aria-label="Clear Cache"
    >
      Clear Cache
    </button>
  </div>

  <ng-container *ngIf="posts$ | async as posts">
    <mat-grid-list cols="1" gutterSize="16px" rowHeight="100px">
      <mat-grid-tile *ngFor="let post of posts">
        <mat-card
          class="post-card"
          style="width: 100%; height: 100%; margin: 8px"
        >
          <mat-card-header>
            <mat-card-title>{{ post.title }}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            {{ post.body }}
          </mat-card-content>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  </ng-container>
</div>
    `,
  },
];

export const injectionTokenCodeSnippets: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
// environment.ts
export const environment = {
  production: false,
  useMock: true, // true → use LocalStorageService, false → use S3StorageService
  apiBaseUrl: 'http://localhost:4200/api',
  s3BucketUrl: 'https://dev-bucket.example.com',
};


// app.module.ts
export const appProviders: Provider[] = [
  {
    provide: DOCUMENT_STORAGE,
    deps: [LocalStorageService, S3StorageService],
    useFactory: (local: LocalStorageService, s3: S3StorageService): DocumentStorage =>
      environment.useMock ? local : s3,
  },
];



// document-storage.ts
export interface DocumentStorage {
  save(doc: string): Promise<string>;
}

export const DOCUMENT_STORAGE = new InjectionToken<DocumentStorage>(
  'DOCUMENT_STORAGE'
);


export class InjectionTokensComponent {
  protected text = '';
  protected msg = '';

  constructor(
    @Inject(DOCUMENT_STORAGE) private storage: DocumentStorage,
    private snackBar: MatSnackBar
  ) {}

  protected async save(): Promise<void> {
    const id = await this.storage.save(this.text);
    const implName = id.startsWith('s3-')
      ? 'S3StorageService'
      : 'LocalStorageService';
    this.msg = \`Saved with \${implName}. id=\${id}\`;
    this.snackBar.open(this.msg, 'OK', { duration: 2500 });
  }
}

    `,
  },
];

export const facadeCodeSnippets: CodeSnippet[] = [
  {
    type: CodeType.TS,
    code: `
export class FacadeComponent {
  protected text = '';
  protected msg = '';
  protected kind: StorageKind = 'local';

  constructor(private facade: StorageFacade, private snackBar: MatSnackBar) {}

  setKind(k: StorageKind): void {
    this.kind = k;
    this.facade.setByKind(k);
  }

  protected async save(): Promise<void> {
    const id = await this.facade.save(this.text);
    const implName = this.kind === 's3' ? 'S3StorageService' : 'LocalStorageService';
    this.msg = \`Saved with \${implName}. id=\${id}\`;
    this.snackBar.open(this.msg, 'OK', { duration: 2500 });
  }
}



// storage-registry.ts
export type StorageKind = 'local' | 's3';

export interface StorageFactory {
  kind: StorageKind;
  create(injector: Injector): DocumentStorage;
}

export const STORAGE_FACTORIES = new InjectionToken<StorageFactory[]>('STORAGE_FACTORIES');

@Injectable({ providedIn: 'root' })
export class StorageFacade implements DocumentStorage {
  private active: DocumentStorage;

  constructor(
    @Inject(STORAGE_FACTORIES) factories: StorageFactory[],
    private injector: Injector
  ) {
    const byKind = new Map<StorageKind, StorageFactory>(
      factories.map(f => [f.kind, f] as const)
    );
    this.active = byKind.get('local')!.create(this.injector);

    this._setByKind = (k: StorageKind) => {
      const factory = byKind.get(k);
      if (!factory) throw new Error(\`No factory for \${k}\`);
      this.active = factory.create(this.injector);
    };
  }

  private _setByKind: (k: StorageKind) => void;

  setByKind(kind: StorageKind): void {
    this._setByKind(kind);
  }

  save(doc: string): Promise<string> {
    return this.active.save(doc);
  }
}
`,
  },
];

export const configInfoCodeSnippets = `
// app-config.ts
export interface AppConfig {
  production: boolean;
  apiBaseUrl: string;
  s3BucketUrl: string;
  useMock: boolean;
  enableFlagToggles: boolean; // only respected in non prod
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');



//environment.ts
export const environment: AppConfig = {
  production: false,
  useMock: false, // true → use LocalStorageService, false → use S3StorageService
  apiBaseUrl: 'http://localhost:4200/api',
  s3BucketUrl: 'https://dev-bucket.example.com',
  enableFlagToggles: true,
};


// environment.prod.ts
export const environment: AppConfig = {
  production: true,
  useMock: false, // prod points to S3 by default
  apiBaseUrl: 'https://api.example.com',
  s3BucketUrl: 'https://prod-bucket.example.com',
  enableFlagToggles: false,
};



// config-info.component.ts
export class ConfigInfoComponent {
  constructor(@Inject(APP_CONFIG) public cfg: AppConfig) {}
}



`;
