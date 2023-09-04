import { Component, HostListener, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faHourglassEnd,faHouse,faPerson,faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private  sharedServiceService: SharedServiceService, private library: FaIconLibrary,) {
    library.addIcons(faBars, faHouse, faHourglassEnd, faPerson,faUsers );
  } 
    lastScrollTop = 0;

  faHourglassEnd = faHourglassEnd;
  faBars = faBars;
  faPerson = faPerson
  faUsers = faUsers

  
  loadQuienesSomos() {
    this.sharedServiceService.currentComponent = 'quienesSomos';
  }

  loadNuestraHistoria() {
     this.sharedServiceService.currentComponent = 'historia'
  }

  loadDonar() {
    this.sharedServiceService.currentComponent = 'donar';
  }
  loadActividadQuienesSomos() {
    this.sharedServiceService.currentComponent = 'quienesSomos';
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
    this.isCollapsed = !this.isCollapsed;
  }

  
  // Puedes agregar más métodos para cargar otros componentes según necesites
}
