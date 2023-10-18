import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit{
  message: string = '';
  private textPart1 = "Gracias por ingresar";
  private textPart2 = "ASOCIACIÓN MISERICORDIA";
  private charIndex = 0;
  animationCompleted = false;
  private firstPartTyped = false;

  constructor() { }

  ngOnInit(): void {
    this.type();
  }

  type() {
    if (this.charIndex < this.textPart1.length) {
      this.message += this.textPart1.charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), 50);
    } else {
      if (!this.firstPartTyped) {
        this.firstPartTyped = true;
        setTimeout(() => this.typeOut(), 1000);
      }
    }
  }

  typeOut() {
    if (this.charIndex > 0) {
      this.message = this.message.slice(0, -1);
      this.charIndex--;
      setTimeout(() => this.typeOut(), 20);
    } else {
      this.typePart2();
    }
  }
   

  typePart2() {
    if (this.charIndex < this.textPart2.length) {
      this.message += this.textPart2.charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.typePart2(), 50);
    } else {
      this.animationCompleted = true; // Cuando la escritura termina, ocultar el cursor
    }
  }
  
}