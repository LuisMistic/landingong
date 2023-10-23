import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../app/landing/componentes/shared-service.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  currentState = 'initial';
 

  constructor(private router: Router, private sharedServiceService: SharedServiceService) {
    // Si es apropiado inicializar propiedades aquí
  }

  ngOnInit() {
  
  }
}