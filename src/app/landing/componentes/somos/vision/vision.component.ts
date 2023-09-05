import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VisionComponent {

  shouldAppear = false;
  shouldDisappear = false; 
  botonAparecer = false;
  botonDesaparecer = false;
  botonvDesaparecer = false;
  botonvAparecer = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition); // Imprime el valor de scrollPosition en la consola
    this.botonDesaparecer = scrollPosition > 400;
    this.botonAparecer = scrollPosition <= 500;
   
    this.botonvDesaparecer = scrollPosition > 2200;
    this.botonvAparecer = scrollPosition <= 1400;
   
   
    // Controla la aparición y desaparición basada en la posición del scroll
    
    if (scrollPosition > 2300) {
      console.log(scrollPosition);

      this.shouldDisappear = true;
      this.shouldAppear = false;
    } else if (scrollPosition <= 2300 && scrollPosition > 1200) {
      this.shouldDisappear = false;
      this.shouldAppear = true;
    } else if (scrollPosition <= 1200) {
      this.shouldDisappear = true;
      this.shouldAppear = false;
    }
    
  }
  
  constructor(private pageScrollService: PageScrollService) { }

 
    valoresScroll() {
      this.pageScrollService.scroll({
        document: document,
        scrollTarget: '#valores',
      });
      
    }
    misionScroll() {
      this.pageScrollService.scroll({
        document: document,
        scrollTarget: '#mision',
      });
    }

    nosotrosScroll() {
      this.pageScrollService.scroll({
        document: document,
        scrollTarget: '#nosotros',
      });
    }
  }