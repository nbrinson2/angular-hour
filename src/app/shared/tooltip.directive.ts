import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input('appTooltip') text = '';

  private tooltipEl: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('constructor', this.text);
  }

  @HostListener('mouseenter')
  show() {
    console.log('show');
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

    // …after you append it to the body…
    const top = hostPos.top - tooltipPos.height - 6;
    const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;

    // use fixed, not absolute:
    this.renderer.setStyle(this.tooltipEl, 'position', 'fixed');
    this.renderer.setStyle(this.tooltipEl, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${left}px`);
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
