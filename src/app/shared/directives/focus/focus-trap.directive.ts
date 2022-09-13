import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appFocusTrap]',
})
export class FocusTrapDirective implements AfterViewInit {
  private firstFocusableElement: HTMLElement;
  private lastFocusableElement: HTMLElement;
  private focusableElements: HTMLElement[];


  constructor(private elementRef: ElementRef<any>) {}

  ngAfterViewInit(): void {
    this.focusableElements = this.elementRef.nativeElement.querySelectorAll(`
    [tabindex]:not([tabindex="-1"]),
    a[href]:not([disabled]),
    button:not([disabled]),
    textarea:not([disabled]),
    input:not([disabled]),
    select:not([disabled])`) as Array<HTMLElement>;

    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    this.firstFocusableElement.focus();
  }

  @HostListener('keydown', ['$event'])
  manageTab(event: KeyboardEvent): void {
    if (event.key !== 'Tab') {
      return;
    }

    if (
      event.shiftKey &&
      document.activeElement === this.firstFocusableElement
    ) {
      this.lastFocusableElement.focus();
      event.preventDefault();
    } else if (document.activeElement === this.lastFocusableElement) {
      this.firstFocusableElement.focus();
      event.preventDefault();
    } else if(event.shiftKey && document.activeElement === this.lastFocusableElement) {
    }
  }
}
