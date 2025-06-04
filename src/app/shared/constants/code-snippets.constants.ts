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
    `
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