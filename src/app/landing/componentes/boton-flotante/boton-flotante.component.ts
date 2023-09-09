import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-flotante',
  templateUrl: './boton-flotante.component.html',
  styleUrls: ['./boton-flotante.component.css']
})
export class BotonFlotanteComponent implements OnInit {

  mostrarBoton = false;
  element: any;

  constructor() { }

  ngOnInit() {
    // Obtener el elemento al que queremos desplazarnos
    this.element = document.querySelector('#nosotros');
  }

  // Adaptar el código de scrollToElement()
  scrollToElement() {
    // Desplazarse al elemento
    if (this.element && this.element.getBoundingClientRect()) {
      this.element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}