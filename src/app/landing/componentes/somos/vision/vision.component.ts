import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VisionComponent {

  shouldAppear = false;
  shouldDisappear = false; 
  botonAparecer = false;
  botonDesaparecer = false;
  botonvDesaparecer = false;
  botonvAparecer = false;


  @HostListener('window:scroll', []) onWindowScroll() { const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0; console.log(scrollPosition); // Imprime el valor de scrollPosition en la consola
  
  // Añade esta línea para obtener la altura de la pantalla const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
  // Añade esta condición para ejecutar el código del ts solo si la altura de la pantalla es mayor que 400 píxeles if (screenHeight > 400) { // Mantén las líneas que tienes para controlar los botones this.botonDesaparecer = scrollPosition > 400; this.botonAparecer = scrollPosition <= 500;
  
  this.botonvDesaparecer = scrollPosition > 2200;
  this.botonvAparecer = scrollPosition <= 1400;
  
  // Cambia los valores de scrollPosition según tus necesidades
  if (scrollPosition > 2300) {
    console.log(scrollPosition);
  
    this.shouldDisappear = true;
    this.shouldAppear = false;
  } else if (scrollPosition <= 2300 && scrollPosition > 1200) {
    this.shouldDisappear = false;
    this.shouldAppear = true;
  } else if (scrollPosition <= 1200) {
    this.shouldDisappear = true;
    this.shouldAppear = false;
  }
}
  constructor() { }



  ngOnInit() {
    
  }

  }