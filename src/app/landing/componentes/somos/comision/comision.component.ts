import { Component, HostListener } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-comision',
  templateUrl: './comision.component.html',
  styleUrls: ['./comision.component.css']
})
export class ComisionComponent {


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
   
   
    this.botonvDesaparecer = scrollPosition > 4200;
    this.botonvAparecer = scrollPosition <= 4600;
   // Controla la aparición y desaparición del color de fondo en la posición del scroll
      
   
    // Controla la aparición y desaparición basada en la posición del scroll
    
    if (scrollPosition > 4300) {
      
      this.shouldDisappear = true;
      this.shouldAppear = false;
    } else if (scrollPosition <= 4300 && scrollPosition > 3400) {
      this.shouldDisappear = false;
      this.shouldAppear = true;
    } else if (scrollPosition <= 3400) {
      this.shouldDisappear = true;
      this.shouldAppear = false;
    }
    
  }
  
  constructor(private pageScrollService: PageScrollService) { }


 
    visionScroll() {
      this.pageScrollService.scroll({
        document: document,
        scrollTarget: '#nosotros',
      });
    }
  }


