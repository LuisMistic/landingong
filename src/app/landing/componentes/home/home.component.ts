import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('changeButtonSize', [
      state(
        'initial',
        style({
          backgroundColor: 'green',
          width: '100px',
          height: '50px',
        })
      ),
      state(
        'final',
        style({
          backgroundColor: 'red',
          width: '200px',
          height: '200px',
        })
      ),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms')),
    ]),
  ],
})
export class HomeComponent {
  currentState = 'initial';

  constructor(private router: Router) {
    // Si es apropiado inicializar propiedades aqui
  }

  payMethod() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    setTimeout(() => {
      this.router.navigate(['mercado-pago']);
    }, 1500);
  }
}
