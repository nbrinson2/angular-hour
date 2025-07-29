import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.scss'
})
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
