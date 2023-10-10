import { Component, HostListener } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ModalImgService } from 'src/app/landing/modal-img.service';
import { SharedServiceService } from '../../shared-service.service';
import { skip } from 'rxjs';
@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent {

  shouldAppear = false;
    shouldDisappear = false;
    botonAparecer = false;
    botonDesaparecer = false;
    colorFondoAparecer = false;
    colorFondoDesparecer = false;
    show: boolean = false;
    element: any;
    scroll: any;
    mostrarAnimacionCierre: boolean = false;
    mostrarAnimacionInicial: boolean = true;


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
  
    
   constructor(private pageScrollService: PageScrollService, private modalImgService: ModalImgService, private sharedServiceService: SharedServiceService ) { }
  
  
  

  ngOnInit() {
    window.scrollTo(0, 0); 
    // Suscribirse al objeto componenteCierreSubject del servicio usando skip(1)
    this.sharedServiceService.obtenerNotificacionCierre().pipe(skip(1)).subscribe(cierre => {
      // Cambiar el valor de la variable mostrarAnimacionCierre según el valor emitido
      this.mostrarAnimacionCierre = cierre;
    });
    // Suscribirse también al objeto animacionInicialSubject del servicio usando skip(1)
    this.sharedServiceService.obtenerNotificacionAnimacionInicial().pipe(skip(1)).subscribe(animacion => {
      // Cambiar el valor de la variable mostrarAnimacionInicial según el valor emitido
      this.mostrarAnimacionInicial = animacion;
    });
  }

}



