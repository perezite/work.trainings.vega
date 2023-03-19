import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, ActivatedRoute, Navigation, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public fullscreen: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // https://stackoverflow.com/questions/51368372/how-get-current-route-data-in-angular-5
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof ActivationEnd) {
        const fullscreen = (event as ActivationEnd).snapshot.data['fullscreen'];
        this.fullscreen = JSON.parse(fullscreen) ?? false;
      }
    });
  }

  title = 'Vega';
}
