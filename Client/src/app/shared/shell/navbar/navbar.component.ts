import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
private isToggled = false;

  @Output() toggleClick = new EventEmitter<boolean>();
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isToggled = !this.isToggled;
    this.toggleClick.emit(this.isToggled);
  }
}
