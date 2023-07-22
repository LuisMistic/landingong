import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentState = 'initial';
  isDarkMode: boolean = false;
  isSwitchOn: boolean = false;
  isSidebarClosed: boolean = false;

  constructor(private router: Router) {};

  toggleSwitch(): void {
    this.isSwitchOn = !this.isSwitchOn;

    if (this.isSwitchOn) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }

  closeSidebar(): void {
    this.isSidebarClosed = true;
  }

  openSidebar(): void {
    this.isSidebarClosed = false;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  getModeText(): string {
    return this.isDarkMode ? 'Light Mode' : 'Dark Mode';
  }

  payMethod() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    setTimeout(() => {
      this.router.navigate(['mercado-pago']);
    }, 1500);
  }

}
