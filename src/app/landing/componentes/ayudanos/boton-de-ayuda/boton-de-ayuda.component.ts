import { Component, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ModalImgService } from 'src/app/landing/modal-img.service';
import SmoothScroll from 'smooth-scroll';

@Component({
  selector: 'app-boton-de-ayuda',
  templateUrl: './boton-de-ayuda.component.html',
  styleUrls: ['./boton-de-ayuda.component.css']
})
export class BotonDeAyudaComponent implements OnInit{

  mostrarBoton = false;
  element: any;
  scroll: any;
  constructor(private pageScrollService: PageScrollService, private modalImgService: ModalImgService) { }

  ngAfterViewInit(): void {
    this.scroll = new SmoothScroll('a[href*="#"]', {
     
  
    });
  
  
  }
  ngOnInit() {
    // Obtener el elemento al que queremos desplazarnos
    // const element = document.getElementById("my-button");
  }
  scrollToElement(elementId: string): void {
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
        this.scroll.animateScroll(element, {
         
        });
      }
    }
  }
}
