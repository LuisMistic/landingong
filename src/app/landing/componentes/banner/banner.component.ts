import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadCarouselScript();
  }

  loadCarouselScript() {
    const script = document.createElement('script');
    script.src = './java.js';
    script.onload = () => {
      console.log('Script loaded successfully.');
    };
    script.onerror = () => {
      console.error(`Error loading script ${script.src}`);
    };
    document.body.appendChild(script);
  }
}
