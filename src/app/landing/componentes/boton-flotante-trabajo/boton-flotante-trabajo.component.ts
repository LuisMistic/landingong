import { Component, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import SmoothScroll from 'smooth-scroll';
import { ModalImgService } from '../../modal-img.service';


@Component({
  selector: 'app-boton-flotante-trabajo',
  templateUrl: './boton-flotante-trabajo.component.html',
  styleUrls: ['./boton-flotante-trabajo.component.css']
})
export class BotonFlotanteTrabajoComponent implements OnInit{


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
