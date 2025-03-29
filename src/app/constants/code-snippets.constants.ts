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
