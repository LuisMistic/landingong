import { Component, HostListener, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import SmoothScroll from 'smooth-scroll';

@Component({
  selector: 'app-comision',
  templateUrl: './comision.component.html',
  styleUrls: ['./comision.component.css']
})
export class ComisionComponent  {


  shouldAppear = false;
  shouldDisappear = false;
  botonAparecer = false;
  botonDesaparecer = false;
  botonvDesaparecer = false;
  botonvAparecer = false;
  colorFondoDesaparecer = false;
  colorFondoAparecer = false;
 


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.botonvDesaparecer = scrollPosition > 4250;
    this.botonvAparecer = scrollPosition <= 4200;

    // Controla la aparición y desaparición del color de fondo en la posición del scroll
    if (scrollPosition > 4000) {
      this.colorFondoDesaparecer = true;
      this.colorFondoAparecer = false;
    } else if (scrollPosition <= 4000 && scrollPosition > 3200) {
      this.colorFondoDesaparecer = false;
      this.colorFondoAparecer = true;
    } else if (scrollPosition <= 3400) {
      this.colorFondoDesaparecer = true;
      this.colorFondoAparecer = false;
    }

    // Controla la aparición y desaparición basada en la posición del scroll
    if (scrollPosition > 4000) {
      this.shouldDisappear = true;
      this.shouldAppear = false;
    } else if (scrollPosition <= 4000 && scrollPosition > 2000) {
      this.shouldDisappear = false;
      this.shouldAppear = true;
    } else if (scrollPosition <= 2000) {
      this.shouldDisappear = true;
      this.shouldAppear = false;
    }
  }

  constructor(private pageScrollService: PageScrollService) { }
  
}