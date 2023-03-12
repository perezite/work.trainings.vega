import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar-demo',
  templateUrl: './navbar-demo.component.html',
  styleUrls: ['./navbar-demo.component.scss']
})
export class NavbarDemoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }
}
