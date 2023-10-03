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
ngOnInit(): void {
  window.scrollTo(0, 0); // Desplázate al principio de la página cuando se carga el componente
}


}



 



 

//  toQuienessomos(){
//   document.getElementById("quienessomos")?.scrollIntoView({ behavior: 'smooth' });
// }

