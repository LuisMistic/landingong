import { Component } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';
import { Subject, skip, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pres1',
  templateUrl: './pres1.component.html',
  styleUrls: ['./pres1.component.css']
})
export class Pres1Component  {
  showTransition: boolean = false;
  mostrarAnimacionCierre: boolean = false;
  mostrarAnimacionInicial: boolean = true;
  
  
  constructor(private sharedServiceService: SharedServiceService, ) {
  
// Notificar al servicio para ocultar el navbar cuando el componente se carga
this.sharedServiceService.cambiarVisibilidadNavbar(false);
}
  



  loadQuienesSomos() {
 
    this.sharedServiceService.currentComponent = 'quienesSomos';

}
  loadNuestraHistoria() {
    this.sharedServiceService.currentComponent = 'historia'
 }
 loadObjetivos() {
  this.sharedServiceService.currentComponent = 'objetivos'
}
 loadTrabajo(){
  this.sharedServiceService.currentComponent = 'trabajo'
 }
 loadDonar(){
  this.sharedServiceService.currentComponent = 'donar'
 }
  cambiarComponente(nombre: string) {
   
    this.sharedServiceService.cambiarComponente(nombre);
    this.sharedServiceService.cambiarVisibilidadNavbar(true);
     // Notificar al servicio para mostrar u ocultar el Navbar
     if (nombre === 'pres1') {
      this.sharedServiceService.cambiarVisibilidadNavbar(false); // Ocultar el Navbar al volver a Pres1
    } else {
      this.sharedServiceService.cambiarVisibilidadNavbar(true); // Mostrar el Navbar para otros componentes
    }
  }

  ngOnInit(): void {
   // Ocultar el navbar cuando se carga el componente pres1
   

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
 

