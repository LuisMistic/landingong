import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-boton-flotante',
  templateUrl: './boton-flotante.component.html',
  styleUrls: ['./boton-flotante.component.css']
})
export class BotonFlotanteComponent {

  mostrarBoton = false;

  constructor(private viewportScroller: ViewportScroller, private pageScrollService: PageScrollService) { }  

  
  scrollToElement() {
    this.viewportScroller.scrollToAnchor('nosotros');
  }
  

  nosotrosScroll() {
    this.pageScrollService.scroll({
      document: document,
      scrollTarget: '#nosotros',
    });
  }

  
  dosMetodosScroll() {
    // Primero, intentamos usar el método de scroll suave
    if (this.pageScrollService.scroll) {
      this.pageScrollService.scroll({
        document: document,
        scrollTarget: '#nosotros',
      });
    } else {
      // Si no está disponible, hacemos un desplazamiento simple
      const element = document.querySelector('#nosotros');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

  
