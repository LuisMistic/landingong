import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  constructor(public sharedServiceService: SharedServiceService) {
    this.sharedServiceService.currentComponent = 'pres1'; // Componente inicial
  }
}