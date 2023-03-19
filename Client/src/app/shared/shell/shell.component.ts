import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  sidebarExpanded = false;

  ngOnInit(): void {
    if(!this.isMobile())
      this.sidebarExpanded = true;
  }

  expandSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }

  closeMobileSidebar() {
    if (this.isMobile()) {
      this.sidebarExpanded = false;
    }
  }

  private isMobile() : boolean {
    const isMobile = window.matchMedia("screen and (max-width: 576px)").matches;
    return isMobile;
  }
}
