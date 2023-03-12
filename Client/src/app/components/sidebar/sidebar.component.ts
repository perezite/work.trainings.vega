import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean = false;
  @Output() expandedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  shrink() {
    this.expanded = false;
    this.expandedChange.emit(this.expanded);
  }
}
