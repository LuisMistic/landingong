import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MisionComponent {

  shouldAppear = false;
  shouldDisappear = false; 
  botonAparecer = false;
  botonDesaparecer = false;
  botonvDesaparecer = false;
  botonvAparecer = false;
  colorFondoAparecer = false;
  colorFondoDesparecer = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition); // Imprime el valor de scrollPosition en la consola
   
   
    this.botonvDesaparecer = scrollPosition > 1300;
    this.botonvAparecer = scrollPosition <= 1400;
   // Controla la aparición y desaparición del color de fondo en la posición del scroll
      
   
    // Controla la aparición y desaparición basada en la posición del scroll
    
    if (scrollPosition > 1300) {
      
      this.shouldDisappear = true;
      this.shouldAppear = false;
    } else if (scrollPosition <= 1300 && scrollPosition > 400) {
      this.shouldDisappear = false;
      this.shouldAppear = true;
    } else if (scrollPosition <= 400) {
      this.shouldDisappear = true;
      this.shouldAppear = false;
    }
    
  }
  
  constructor(private pageScrollService: PageScrollService) { }


 
    visionScroll() {
      this.pageScrollService.scroll({
        document: document,
        scrollTarget: '#vision',
      });
    }
    nosotrosScroll() {
      this.pageScrollService.scroll({
        document: document,
        scrollTarget: '#nosotros',
      });
    }
  
  }

