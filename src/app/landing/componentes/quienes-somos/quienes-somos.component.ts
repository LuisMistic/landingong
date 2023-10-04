import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import SmoothScroll from 'smooth-scroll';
import { Subject, takeUntil } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('cierreComponente', [
      state('cerrado', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition('* => cerrado', [
        animate('0.5s')
      ])
    ])
  ]
})
export class QuienesSomosComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  animacionCierreActiva: boolean = false; // Variable para controlar la animación de cierre
  estadoAnimacion: string = 'abierto'; // Estado inicial, puede ser 'abierto' o 'cerrado'

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
  constructor(
    private sharedServiceService: SharedServiceService,
    
  ) {
    // Suscríbete al Observable para recibir la notificación de cierre
    this.sharedServiceService.obtenerNotificacionCierre()
      .pipe(takeUntil(this.destroy$))
      .subscribe((cierre: boolean) => {
        // Realiza acciones cuando se recibe una notificación de cierre
        if (cierre) {
          // Activa la animación de cierre o realiza otras acciones necesarias
          this.iniciarAnimacionCierre();
        }
      });
  }

  ngAfterViewInit(): void {
    this.scroll = new SmoothScroll('a[href*="#"]', {
      // Configuración de SmoothScroll si es necesario
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Desplázate al principio de la página cuando se carga el componente
   
    this.showTransition = true;
    this.animacionCierreActiva = false; // Inicializado como false
    this.estadoAnimacion = 'abierto'; // Inicializado como 'abierto'
    setTimeout(() => {
      this.showTransition = false;
    }, 1000); // 1000 milisegundos = 1 segundo
  }

  iniciarAnimacionCierre() {
    if (!this.animacionCierreActiva) {
      this.mostrarAnimacionCierre = true;
      this.estadoAnimacion = 'cerrado'; // Cambia el estado para activar la animación

      // Ajusta la duración de la animación de cierre según tus necesidades
      setTimeout(() => {
        this.animacionCierreActiva = false;
        console.log('animacion activada'); // Aquí agregué la consola de registro
        this.estadoAnimacion = 'abierto'; // Vuelve al estado inicial
        // Realiza otras acciones después de completar la animación de cierre
      }, 3000); // 3000 milisegundos = 3 segundos (ajusta el valor según tu animación)
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
