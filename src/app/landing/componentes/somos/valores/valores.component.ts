import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import SmoothScroll from 'smooth-scroll';
@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ValoresComponent implements OnInit {

  shouldAppear = false;
  shouldDisappear = false;
  botonAparecer = false;
  botonDesaparecer = false;
  botonvDesaparecer = false;
  botonvAparecer = false;
  element: any;
  scroll: any;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition); // Imprime el valor de scrollPosition en la consola
    this.botonDesaparecer = scrollPosition > 400;
    this.botonAparecer = scrollPosition <= 500;

    this.botonvDesaparecer = scrollPosition > 3300;
    this.botonvAparecer = scrollPosition <= 2400;


    // Controla la aparición y desaparición basada en la posición del scroll

    if (scrollPosition > 3300) {
      console.log(scrollPosition);

      this.shouldDisappear = true;
      this.shouldAppear = false;
    } else if (scrollPosition <= 3300 && scrollPosition > 2400) {
      this.shouldDisappear = false;
      this.shouldAppear = true;
    } else if (scrollPosition <= 2400) {
      this.shouldDisappear = true;
      this.shouldAppear = false;
    }

  }

  constructor(private pageScrollService: PageScrollService) { }


  ngAfterViewInit(): void {
    this.scroll = new SmoothScroll('a[href*="#"]', {
      speed: 900,

    });


  }

  ngOnInit() {
    
  }
  scrollToElement(elementId: string): void {
    const element = document.querySelector(`#${elementId}`);

    if (element) {
      if (window.matchMedia("(min-width: 500px)").matches) {
        // El ancho del viewport es al menos de 699 píxeles, por lo que no es un dispositivo móvil
        this.pageScrollService.scroll({
          document: document,
          scrollTarget: `#${elementId}`,
         
        });
      } else {
        // El ancho del viewport es menor o igual a 698 píxeles, por lo que es un dispositivo móvil
        this.scroll.animateScroll(element, {
          
        });
      }
    }
  }
}