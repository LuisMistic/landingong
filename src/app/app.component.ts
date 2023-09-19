import { Component } from '@angular/core';
import { Router } from '@angular/router';


// TO DO -- import from Mercado Pago



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentState = 'initial';

  constructor(private router: Router) {
    // Si es apropiado inicializar propiedades aqui
  }

}
