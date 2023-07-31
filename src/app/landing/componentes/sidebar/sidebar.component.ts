import { Component,  EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isDarkMode: boolean = false;
  isSwitchOn: boolean = false;
  isSidebarClosed: boolean = false;

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
}