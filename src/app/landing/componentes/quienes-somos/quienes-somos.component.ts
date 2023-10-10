import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import SmoothScroll from 'smooth-scroll';
import { Subject, skip, takeUntil } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
  encapsulation: ViewEncapsulation.Emulated,

})
export class QuienesSomosComponent implements OnInit {
  private destroy$ = new Subject<void>();


  shouldAppear = false;
  shouldDisappear = false;
  botonAparecer = false;
  botonDesaparecer = false;
  colorFondoAparecer = false;
  colorFondoDesparecer = false;
  show: boolean = false;
  element: any;
  scroll: any;
  showTransition: boolean = false;
  mostrarAnimacionCierre: boolean = false;
  mostrarAnimacionInicial: boolean = true;
  mostrarNavbar = false;

  constructor( private sharedServiceService: SharedServiceService  ) {
 
  }


  ngAfterViewInit(): void {
    this.scroll = new SmoothScroll('a[href*="#"]', {
      // Configuración de SmoothScroll si es necesario
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0); 
    setTimeout(() => {
      this.mostrarNavbarConAnimacion();
    }, );
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
   // Método para mostrar la barra de navegación
// En tu componente TypeScript
// Inicialmente, no mostrar el navbar

mostrarNavbarConAnimacion() {
  this.mostrarNavbar = true; // Establece mostrarNavbar en true cuando quieras mostrar el navbar
  console.log('mostrarNavbar se estableció en true');
}
 }

