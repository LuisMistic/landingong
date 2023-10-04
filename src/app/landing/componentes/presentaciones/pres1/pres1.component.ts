import { Component } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-pres1',
  templateUrl: './pres1.component.html',
  styleUrls: ['./pres1.component.css']
})
export class Pres1Component  {
  showTransition: boolean = false;

  constructor(private sharedServiceService: SharedServiceService) {}
  loadQuienesSomos() {
    this.showTransition = true;
    setTimeout(() => {
    this.sharedServiceService.currentComponent = 'quienesSomos';
  }, 1000);
}
  loadNuestraHistoria() {
    this.sharedServiceService.currentComponent = 'historia'
 }
 loadObjetivos() {
  this.sharedServiceService.currentComponent = 'objetivos'
}
 loadTrabajo(){
  this.sharedServiceService.currentComponent = 'trabajo'
 }
  ngOnInit(): void {
    window.scrollTo(0, 0); // Desplázate al principio de la página cuando se carga el componente
  }

}
