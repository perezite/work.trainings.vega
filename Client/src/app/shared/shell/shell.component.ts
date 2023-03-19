import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  sidebarExpanded = false;

  ngOnInit(): void {
    const isMobile = window.matchMedia("screen and (max-width: 576px)").matches;
    if(!isMobile)
      this.sidebarExpanded = true;
  }

  expandSidebar(expand: boolean) {
    this.sidebarExpanded = !this.sidebarExpanded;
  }


}
