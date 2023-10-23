import { Component, HostListener } from '@angular/core';



import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faHourglassEnd, faHouse, faPerson, faUsers } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedServiceService } from '../../shared-service.service';
@Component({
  selector: 'app-voluntariado',
  templateUrl: './voluntariado.component.html',
  styleUrls: ['./voluntariado.component.css']
})
export class VoluntariadoComponent {
  shouldAppear = false;
  shouldDisappear = false; 
  botonAparecer = false;
  botonDesaparecer = false;
  botonvDesaparecer = false;
  botonvAparecer = false;


  @HostListener('window:scroll', []) onWindowScroll() { const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0; console.log(scrollPosition); // Imprime el valor de scrollPosition en la consola
  

  this.botonvDesaparecer = scrollPosition > 2200;
  this.botonvAparecer = scrollPosition <= 1400;
  
  // Cambia los valores de scrollPosition según tus necesidades
  if (scrollPosition > 2300) {
    console.log(scrollPosition);
  
    this.shouldDisappear = true;
    this.shouldAppear = false;
  } else if (scrollPosition <= 2300 && scrollPosition > 1200) {
    this.shouldDisappear = false;
    this.shouldAppear = true;
  } else if (scrollPosition <= 1200) {
    this.shouldDisappear = true;
    this.shouldAppear = false;
  }
}
  constructor() { }



  ngOnInit() {
    
  }

  }