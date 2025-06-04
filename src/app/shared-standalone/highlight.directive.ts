// highlight.directive.ts
import {
  Directive,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

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

  /** On mouseenter → set background to `highlightColor` */
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = this.highlightColor;
  }

  /** On mouseleave → clear background */
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = null;
  }
}
