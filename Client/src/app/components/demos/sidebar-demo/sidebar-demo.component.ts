import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-demo',
  templateUrl: './sidebar-demo.component.html',
  styleUrls: ['./sidebar-demo.component.scss']
})
export class SidebarDemoComponent implements OnInit {
  sidebarExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebarExpansion() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }

}
