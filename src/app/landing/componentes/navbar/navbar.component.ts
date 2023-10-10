import { Component, HostListener, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';


import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faHourglassEnd, faHouse, faPerson, faUsers } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { VisibilityService } from '../visibility.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideDown', [
      state('void', style({ transform: 'translateY(-100%)' })), // Estado inicial fuera de la pantalla
      state('*', style({ transform: 'translateY(0)' })), // Estado final en la pantalla
      transition('void => *', animate('500ms ease-in')), // Animación cuando aparece
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  
  constructor(private sharedServiceService: SharedServiceService, private library: FaIconLibrary) {
    
    library.addIcons(faBars, faHouse, faHourglassEnd, faPerson, faUsers);
  }

  lastScrollTop = 0;

  faHourglassEnd = faHourglassEnd;
  faBars = faBars;
  faPerson = faPerson
  faUsers = faUsers
  isNavbarHidden = false;
  isCollapsed = true;
  isSubMenuOpen = false; // Variable para controlar el estado del submenú
  isVisible: boolean = false; // Inicialmente invisible
 
  ngOnInit(): void {
    // Suscribirse al Observable mostrarNavbar$ en el servicio
    this.sharedServiceService.mostrarNavbar$.subscribe((mostrar: boolean) => {
      this.isVisible = mostrar;
    });
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


 // Cambiar el método cambiarComponente para que use una condición // 
 cambiarComponente(nombre: string) {
  // Obtenemos el estado actual del Navbar desde el servicio
  
  
  // Verificar si el nombre del componente al que quieres cambiar es diferente al nombre del componente actual
  if (nombre !== this.sharedServiceService.currentComponent) {
    // Llamar al método cambiarComponente del servicio con el nombre del componente al que quieres cambiar
    this.sharedServiceService.cambiarComponente(nombre);
    
    // Llamar al método mostrarNavbar del servicio para cambiar la visibilidad del Navbar

}
}
volverAPres1() {
  // Llamar al método cambiarComponente del servicio con el nombre 'pres1' para regresar al componente Pres1
  this.sharedServiceService.cambiarComponente('pres1');
  // Notificar al servicio para ocultar el Navbar al volver al componente Pres1
  this.sharedServiceService.cambiarVisibilidadNavbar(false);
  // Agregar aquí cualquier otra lógica necesaria para regresar al componente Pres1
}


}