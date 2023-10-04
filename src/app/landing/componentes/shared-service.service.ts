import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  currentComponent: string = 'default';
  animacionCierreActiva: boolean = false;

  private componenteCierreSubject = new BehaviorSubject<boolean>(false);
  private otroComponenteSubject = new Subject<void>();

  constructor() { }

  notificarCierreComponente(cierre: boolean = false) {
    this.componenteCierreSubject.next(cierre);
  }

  notificarAnimacionesCierre() {
    this.animacionCierreActiva = true;
    this.componenteCierreSubject.next(true);
  }

  notificarOtroComponente() {
    this.otroComponenteSubject.next();
  }

  obtenerNotificacionOtroComponente(): Observable<void> {
    return this.otroComponenteSubject.asObservable();
  }

  obtenerNotificacionCierre(): Observable<boolean> {
    return this.componenteCierreSubject.asObservable();
  }

  // Resto de tu servicio
}
