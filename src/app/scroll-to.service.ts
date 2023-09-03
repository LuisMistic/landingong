import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop;
      const distance = elementPosition - window.pageYOffset;
      const duration = Math.abs(distance / 2);
      this.smoothScroll(distance, duration);
    }
  }

  smoothScroll(distance: number, duration: number) {
    let start = performance.now();
    let elapsed = 0;
    let progress = 0;

    const step = (timestamp: number) => {
      elapsed = timestamp - start;
      progress = elapsed / duration;
      progress = Math.min(progress, 1);

      window.scrollBy(0, distance * progress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
}
