import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ModalImgService } from '../../modal-img.service';

@Component({
  selector: 'app-nuestra-historia',
  templateUrl: './nuestra-historia.component.html',
  styleUrls: ['./nuestra-historia.component.css']
})
export class NuestraHistoriaComponent  {

    shouldAppear = false;
    shouldDisappear = false;
    botonAparecer = false;
    botonDesaparecer = false;
    colorFondoAparecer = false;
    colorFondoDesparecer = false;
    
    
  
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
  
  
 
  ngOnInit(): void {
    window.scrollTo(0, 0); // Desplázate al principio de la página cuando se carga el componente
  }
  
  
  }
  