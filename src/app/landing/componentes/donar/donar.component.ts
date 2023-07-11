import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent {
  
   mostrar:boolean=false
   constructor(private route:Router){
    
   }
  dondeIr(){
    this.mostrar=true
  }

}
