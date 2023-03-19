import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShellService } from '../shell.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
private isToggled = false;

  @Output() toggleClick = new EventEmitter<boolean>();
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private shellService: ShellService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.newItemEvent.emit('test');
    // this.isToggled = !this.isToggled;
    //this.toggleClick.emit(this.isToggled);
    // this.shellService.toggleSidebar();
  }
}
