import { Component, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import SmoothScroll from 'smooth-scroll';
import { ModalImgService } from '../../modal-img.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  mostrarBoton = false;
  element: any;
  scroll: any;

  constructor(
    private pageScrollService: PageScrollService,
    private modalImgService: ModalImgService
  ) {}

  ngAfterViewInit(): void {
    this.scroll = new SmoothScroll('a[href*="#"]', {});
  }

  ngOnInit() {}

  scrollToElement(elementId: string): void {
    window.scrollTo(0, 0); // Desplázate al principio de la página
    const element = document.querySelector(`#${elementId}`);

    if (element) {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        // El ancho del viewport es al menos de 1500 píxeles, por lo que no es un dispositivo móvil
        this.pageScrollService.scroll({
          document: document,
          scrollTarget: `#${elementId}`,
        });
      } else {
        // El ancho del viewport es menor o igual a 1500 píxeles, por lo que es un dispositivo móvil
        this.scroll.animateScroll(element, {});
      }
    }
  }
}
