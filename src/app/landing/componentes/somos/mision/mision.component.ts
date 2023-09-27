import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MisionComponent {

  shouldAppear = false;
  shouldDisappear = false;
  botonAparecer = false;
  botonDesaparecer = false;
 
  colorFondoAparecer = false;
  colorFondoDesparecer = false;


  @HostListener('window:scroll', []) onWindowScroll()
   { const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop ||
     0; const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
     if (screenHeight > 400)
      
         if (scrollPosition > 1300) 
         { this.shouldDisappear = true; this.shouldAppear = false; } 
         else if (scrollPosition <= 1300 && scrollPosition > 400) 
         { this.shouldDisappear = false; this.shouldAppear = true; }
          else if (scrollPosition <= 400)
           { this.shouldDisappear = true; this.shouldAppear = false; } } }





