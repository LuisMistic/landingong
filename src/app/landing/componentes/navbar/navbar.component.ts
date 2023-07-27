import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private sharedServiceService: SharedServiceService) {}
  
  loadQuienesSomos() {
    this.sharedServiceService.currentComponent = 'quienesSomos';
  }

  loadDonar() {
    this.sharedServiceService.currentComponent = 'donar';
  }
  loadActividadQuienesSomos() {
    this.sharedServiceService.currentComponent = 'quienesSomos';
  }

  // Puedes agregar más métodos para cargar otros componentes según necesites
}