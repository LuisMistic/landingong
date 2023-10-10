import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  currentComponent: string = 'default';
  private mostrarNavbarSubject = new BehaviorSubject<boolean>(false);
  mostrarNavbar$ = this.mostrarNavbarSubject.asObservable(); // Observable para la visibilidad del navbar

  
  mostrarAnimacionCierre: boolean = false;
  mostrarAnimacionInicial: boolean = false;
  private componenteCierreSubject = new BehaviorSubject<boolean>(false);
  private animacionInicialSubject = new BehaviorSubject<boolean>(false);
  
  constructor() {
     
   }
  // Método para cambiar la visibilidad del navbar
  cambiarVisibilidadNavbar(visible: boolean) {
    this.mostrarNavbarSubject.next(visible);
  }
  // Este es el método para notificar el cambio de valor de la variable mostrarAnimacionCierre
  notificarAnimacionCierre(animacion: boolean = false) {
    this.componenteCierreSubject.next(animacion);
  }

  // Este es el método para notificar el cambio de valor de la variable mostrarAnimacionInicial
  notificarAnimacionInicial(animacion: boolean = false) {
    this.animacionInicialSubject.next(animacion);
  }

  // Este es el método para notificar el cierre del navbar

  // Este es el método para obtener el observable correspondiente al objeto componenteCierreSubject
  obtenerNotificacionCierre(): Observable<boolean> {
    return this.componenteCierreSubject.asObservable();
  }

  // Este es el método para obtener el observable correspondiente al objeto animacionInicialSubject
  obtenerNotificacionAnimacionInicial(): Observable<boolean> {
    return this.animacionInicialSubject.asObservable();
  }
 
  // Este es el nuevo método que recibe el nombre del componente al que quieres cambiar y notifica al servicio que se va a mostrar la animación inicial y la de cierre
  cambiarComponente(nombre: string) {
    // Notificar al servicio que se va a mostrar la animación inicial
    this.notificarAnimacionInicial(true);
    // Notificar al servicio que se va a cerrar el componente actual
    this.notificarAnimacionCierre(true);
    // Cambiar el valor de la variable currentComponent después de un tiempo suficiente para que se ejecuten las animaciones
    setTimeout(() => {
      this.currentComponent = nombre;
      // Notificar al servicio que se va a ocultar la animación inicial
      this.notificarAnimacionInicial(true);
      // Notificar al servicio que se ha cerrado el componente anterior
      this.notificarAnimacionCierre(true);
      
    }, 1000);
      // Método para mostrar u ocultar el Navbar


  }




}