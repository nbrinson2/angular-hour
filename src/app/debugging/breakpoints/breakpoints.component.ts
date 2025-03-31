import { Component } from '@angular/core';
import { breakpointsExampleCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-breakpoints',
  templateUrl: './breakpoints.component.html',
  styleUrls: ['./breakpoints.component.scss'],
})
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
}
