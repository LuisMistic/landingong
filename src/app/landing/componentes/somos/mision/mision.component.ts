import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MisionComponent {

  shouldAppear = false;
  shouldDisappear = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition); // Imprime el valor de scrollPosition en la consola
    // Controla la aparición y desaparición basada en la posición del scroll
    
    if (scrollPosition > 1100) {
      
      this.shouldDisappear = true;
      this.shouldAppear = false;
    } else if (scrollPosition <= 1100 && scrollPosition > 400) {
      this.shouldDisappear = false;
      this.shouldAppear = true;
    } else if (scrollPosition <= 400) {
      this.shouldDisappear = true;
      this.shouldAppear = false;
    }
    
  }

  @ViewChild('missionsSection') missionsSection!: ElementRef;
  scrollToMissions() {
    this.missionsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
