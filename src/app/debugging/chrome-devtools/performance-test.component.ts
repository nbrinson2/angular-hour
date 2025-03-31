import { Component } from '@angular/core';
import { performanceTestCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-performance-test',
  templateUrl: './performance-test.component.html',
  styleUrl: './performance-test.component.scss',
})
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
