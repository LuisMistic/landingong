import { Component, HostListener, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import SmoothScroll from 'smooth-scroll';

@Component({
  selector: 'app-comision',
  templateUrl: './comision.component.html',
  styleUrls: ['./comision.component.css']
})
export class ComisionComponent implements OnInit {


  shouldAppear = false;
  shouldDisappear = false;
  botonAparecer = false;
  botonDesaparecer = false;
  botonvDesaparecer = false;
  botonvAparecer = false;
  colorFondoDesaparecer = false;
  colorFondoAparecer = false;
  element: any;
  scroll: any;







  // Adaptar el código de scrollToElement()
  // scrollToElement() {
  //   // Desplazarse al elemento
  //   if (this.element && this.element.getBoundingClientRect()) {
  //     this.element.scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   }
  // }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.botonvDesaparecer = scrollPosition > 4250;
    this.botonvAparecer = scrollPosition <= 4200;

    // Controla la aparición y desaparición del color de fondo en la posición del scroll
    if (scrollPosition > 4300) {
      this.colorFondoDesaparecer = true;
      this.colorFondoAparecer = false;
    } else if (scrollPosition <= 4300 && scrollPosition > 3400) {
      this.colorFondoDesaparecer = false;
      this.colorFondoAparecer = true;
    } else if (scrollPosition <= 3400) {
      this.colorFondoDesaparecer = true;
      this.colorFondoAparecer = false;
    }

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
  // valoresScroll() {
  //   this.pageScrollService.scroll({
  //     document: document,
  //     scrollTarget: '#valores',
  //     duration: 100
  //   });
  // }


  // nosotrosScroll() {
  //   this.pageScrollService.scroll({
  //     document: document,
  //     scrollTarget: '#nosotros',


  //   });
  // }


  ngAfterViewInit(): void {
    this.scroll = new SmoothScroll('a[href*="#"]', {
      speed: 900,

    });


  }
  ngOnInit() {
    // Obtener el elemento al que queremos desplazarnos
    // const element = document.getElementById("my-button");
  }
  scrollToElement(elementId: string): void {
    const element = document.querySelector(`#${elementId}`);

    if (element) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        // El ancho del viewport es al menos de 768 píxeles, por lo que no es un dispositivo móvil
        this.pageScrollService.scroll({
          document: document,
          scrollTarget: `#${elementId}`,
          speed: 900,
        });
      } else {
        // El ancho del viewport es menor o igual a 767 píxeles, por lo que es un dispositivo móvil
        this.scroll.animateScroll(element, {
          speed: 900,
        });
      }
    }
  }

}