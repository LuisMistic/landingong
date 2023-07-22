import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent {
  
  constructor(private sharedServiceService: SharedServiceService) {}
  
   loadDonar() {
    this.sharedServiceService.currentComponent = 'donar';
  }

}
