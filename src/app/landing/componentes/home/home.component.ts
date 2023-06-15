import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private router: Router ) {
    
    // Si es apropiado inicializar propiedades aqui
  }

  payMethod() {
    this.router.navigate(['mercado-pago']);
  }
}
