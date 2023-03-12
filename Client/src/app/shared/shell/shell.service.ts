import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShellService {
  public isSidebarExpanded = false;

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}
