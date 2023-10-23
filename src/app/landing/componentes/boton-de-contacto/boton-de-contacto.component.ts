import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-boton-de-contacto',
  templateUrl: './boton-de-contacto.component.html',
  styleUrls: ['./boton-de-contacto.component.css']
})
export class BotonDeContactoComponent {

  constructor(private sharedServiceService: SharedServiceService) {}

  ngOnInit(): void {
  
  }
  cambiarComponente(nombre: string) {
    // Obtenemos el estado actual del Navbar desde el servicio
   
    
    // Verificar si el nombre del componente al que quieres cambiar es diferente al nombre del componente actual
    if (nombre !== this.sharedServiceService.currentComponent) {
      // Llamar al método cambiarComponente del servicio con el nombre del componente al que quieres cambiar
      this.sharedServiceService.cambiarComponente(nombre);
      
      // Llamar al método mostrarNavbar del servicio para cambiar la visibilidad del Navbar
  
  }
  }}
