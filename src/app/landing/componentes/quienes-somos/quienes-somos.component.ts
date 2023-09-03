import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class QuienesSomosComponent {

  shouldAppear = false;
  shouldDisappear = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Controla la aparición y desaparición basada en la posición del scroll
    this.shouldDisappear = scrollPosition > 200;
    this.shouldAppear = scrollPosition <= 200;

    const yOffset: number = window.scrollY || window.pageYOffset;
  }

  toQuienessomos(){
   document.getElementById("quienessomos")?.scrollIntoView({ behavior: 'smooth' });
 }

  @ViewChild('missionsSection') missionsSection!: ElementRef;
  scrollToMissions() {
    setTimeout(() => {
      this.missionsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}
