import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { ShellService } from './shell.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  constructor(public shellService: ShellService) {
  }

  // navbarToggled(bla: any) {

  // }

  // addItem(newItem: string) {
  //   const test = newItem;
  //   // this.items.push(newItem);
  // }
}
