import { Component } from '@angular/core';
import { promiseVsObservableCode } from '../../shared/constants/code-snippets.constants';
import { UserService } from '../../shared/services/user.service';
import { interval, map, Subscription, take } from 'rxjs';
import { InfoItem } from '../../shared/example-info/example-info.component';
import { trigger, transition, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-promise-vs-observable',
  templateUrl: './promise-vs-observable.component.html',
  styleUrl: './promise-vs-observable.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('valueSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class PromiseVsObservableComponent {

  protected promiseVsObservableCode = promiseVsObservableCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Promises ',
        description: 'are great for one-off calls with a single value.',
      },
      {
        label: 'Observables ',
        description: 'shine when you need streams, operators, cancellation, or retry logic.',
      },
    ],
  };

  protected exampleInfo2: InfoItem = {
    bulletPoints: [
      {
        label: 'Promise Use Cases: ',
        description: 'HTTP requests, file operations, database queries, authentication flows',
      },
      {
        label: 'Observable Use Cases: ',
        description: 'Real-time updates, websockets, user input events, long-running operations with progress updates',
      }
    ],
  };

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
