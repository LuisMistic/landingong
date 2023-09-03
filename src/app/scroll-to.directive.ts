import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ScrollToService } from './scroll-to.service';

@Directive({
  selector: '[ScrollTo]'
})

export class ScrollToDirective {

  @Input('scrollTo') scrollTo!: string;

  constructor(private el: ElementRef, private scrollService: ScrollToService) { }

  @HostListener('click')
  onClick() {
    this.scrollService.scrollToElement(this.scrollTo);
  }

}