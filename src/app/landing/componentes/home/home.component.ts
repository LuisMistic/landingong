import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentState = 'initial';

  constructor(private router: Router) {
    // Si es apropiado inicializar propiedades aqui
  }
}
