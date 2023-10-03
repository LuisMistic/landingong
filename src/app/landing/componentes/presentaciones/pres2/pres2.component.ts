import { Component } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-pres2',
  templateUrl: './pres2.component.html',
  styleUrls: ['./pres2.component.css']
})
export class Pres2Component {

 constructor(private sharedServiceService: SharedServiceService) {}
  loadNuestraHistoria() {
    this.sharedServiceService.currentComponent = 'historia'
 }
 ngOnInit(): void {
  window.scrollTo(0, 0); // Desplázate al principio de la página cuando se carga el componente
}

}
