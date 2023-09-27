import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ModalImgService } from '../../modal-img.service';
import SmoothScroll from 'smooth-scroll';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class QuienesSomosComponent {

  shouldAppear = false;
  shouldDisappear = false;
  botonAparecer = false;
  botonDesaparecer = false;
  colorFondoAparecer = false;
  colorFondoDesparecer = false;
  show: boolean = false;
  element: any;
  scroll: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
 
    // Controla la aparición y desaparición basada en la posición del scroll
    this.shouldDisappear = scrollPosition > 400;
    this.shouldAppear = scrollPosition <= 200;
       // Controla la aparición y desaparición del boton basada en la posición del scroll
      
    
  
       // Controla la aparición y desaparición del color de fondo en la posición del scroll
       this.colorFondoDesparecer = scrollPosition > 400;
       this.colorFondoAparecer = scrollPosition <= 200;
    
       
    
    
  }

  
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


 



 

//  toQuienessomos(){
//   document.getElementById("quienessomos")?.scrollIntoView({ behavior: 'smooth' });
// }

