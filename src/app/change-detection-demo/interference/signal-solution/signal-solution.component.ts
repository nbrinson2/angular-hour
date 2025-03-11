import { Component, computed, Signal, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-signal-solution',
  templateUrl: './signal-solution.component.html',
  styleUrl: './signal-solution.component.scss'
})
export class SignalSolutionComponent {
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
}
