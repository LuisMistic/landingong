import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-banner',
  template: `
    <ng-container *ngIf="sharedServiceService.currentComponent === 'quienesSomos'">
      <app-quienes-somos></app-quienes-somos>
    </ng-container>

    <ng-container *ngIf="sharedServiceService.currentComponent === 'donar'">
      <app-boton-de-pago></app-boton-de-pago>
    </ng-container>

    <ng-container *ngIf="sharedServiceService.currentComponent === 'historia'">
      <app-nuestra-historia></app-nuestra-historia>
    </ng-container>
    <!-- Puedes agregar más componentes según los botones del menú -->
  `,
})
export class BannerComponent {
  constructor(public sharedServiceService: SharedServiceService) {}
}