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

  constructor(private breakpointObserver: BreakpointObserver) {
    // Subscribe to viewport breakpoints to adjust the grid columns.
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
      ])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.cols = 1;
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.cols = 2;
        } else {
          this.cols = 3;
        }
      });
  }

  /**
   * Computes dynamic CSS styles for each list item.
   * Here, the width and height are based on the index.
   * Adjust the logic as needed to derive from item properties.
   */
  getDynamicStyles(index: number): { [key: string]: string } {
    const baseWidth = 200;
    const baseHeight = 50;

    const computedWidth = (
      baseWidth * this.itemDisplaySizeMulitiplier
    ).toString();
    const computedHeight = (
      baseHeight * this.itemDisplaySizeMulitiplier
    ).toString();

    return {
      width: computedWidth,
      height: computedHeight,
    };
  }
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
    code: `<ul>
  <li *ngFor="let item of items">
    <!-- Render the provided template with the current item as context -->
    <ng-container *ngTemplateOutlet="template; context: { $implicit: item }">
    </ng-container>
  </li>
</ul>

    
    
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
