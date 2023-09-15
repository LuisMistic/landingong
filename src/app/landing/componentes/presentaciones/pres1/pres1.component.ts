import { Component } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-pres1',
  templateUrl: './pres1.component.html',
  styleUrls: ['./pres1.component.css']
})
export class Pres1Component  {

  constructor(private sharedServiceService: SharedServiceService) {}
  loadQuienesSomos() {
    this.sharedServiceService.currentComponent = 'quienesSomos';
  }
}
