import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShellService } from '../shell.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private shellService: ShellService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.shellService.toggleSidebar();
  }
}
