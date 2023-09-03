import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VisionComponent {


  shouldAppear = false;
  shouldDisappear = false;
  imgShouldAppear = false;
  imgHouldDisappear = false;
 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Controla la aparición y desaparición basada en la posición del scroll
    this.shouldDisappear = scrollPosition > 200;
    this.shouldAppear = scrollPosition <= 200;

    this.imgHouldDisappear = scrollPosition > 200;
    this.imgShouldAppear = scrollPosition <= 200;
   
    const yOffset: number = window.scrollY || window.pageYOffset;

  }

 

  @ViewChild('missionsSection') missionsSection!: ElementRef;
  scrollToMissions() {
    this.missionsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }




}
