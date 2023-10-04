import { Component, HostListener, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faHourglassEnd, faHouse, faPerson, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private sharedServiceService: SharedServiceService, private library: FaIconLibrary,) {

    library.addIcons(faBars, faHouse, faHourglassEnd, faPerson, faUsers);
  }

  lastScrollTop = 0;

  faHourglassEnd = faHourglassEnd;
  faBars = faBars;
  faPerson = faPerson
  faUsers = faUsers
  isNavbarHidden = false;

  loadQuienesSomos() {
    this.sharedServiceService.notificarAnimacionesCierre();
    this.sharedServiceService.currentComponent = 'quienesSomos';
  }

  loadNuestraHistoria() {
    
    this.sharedServiceService.notificarAnimacionesCierre();
    this.sharedServiceService.currentComponent = 'historia';
  }
  loadObjetivos() {
    this.sharedServiceService.notificarAnimacionesCierre();
    this.sharedServiceService.currentComponent = 'objetivos';
  }

  loadDonar() {
    this.sharedServiceService.notificarAnimacionesCierre();
    this.sharedServiceService.currentComponent = 'dontar';
  }
  loadActividadQuienesSomos() {
    this.sharedServiceService.notificarAnimacionesCierre();
    this.sharedServiceService.currentComponent = 'quienesSomos';
  }

  loadaAppComponent() {
    this.sharedServiceService.notificarAnimacionesCierre();
    this.sharedServiceService.currentComponent = 'pres1';
  }

  loadTrabajo() {
    this.sharedServiceService.notificarAnimacionesCierre();
    this.sharedServiceService.currentComponent = 'trabajo';
  }





  isCollapsed = true;
  isSubMenuOpen = false; // Variable para controlar el estado del submenú

  ngOnInit(): void {

  }

  isSmallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768; // Tamaño típico para tablets (puedes ajustar este valor según tus necesidades)
  }

  // Agregar función para controlar la apertura y cierre del submenú
  toggleSubMenu() {
    console.log('toggleSubMenu() se ejecutó.')
    this.isCollapsed = !this.isCollapsed;

  }
  cargarComponente(componente: string) {
    // Notifica que se debe cerrar cualquier componente

    console.log('Recibida notificación de cierre');

    // Cambia al componente deseado
    this.sharedServiceService.currentComponent = componente;
  }

  // Puedes agregar más métodos para cargar otros componentes según necesites
}
