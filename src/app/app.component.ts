import {Component} from '@angular/core';
import {MarketStatusService} from './market-status.service';
import {Observable} from 'rxjs';
import {MarketPrice} from './market-price';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
          <li class='nav-item'><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}"
                [routerLink]="['/customer']">Sign up</a>
          </li>
        </ul>
    </nav>
    <div class='container'>
      <app-market-chart [marketStatus]="marketStatusToPlot"></app-market-chart>
      <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string  = 'Angular: Getting Started';
  marketStatus: MarketPrice[];
  marketStatusToPlot: MarketPrice[];

  constructor(private marketStatusSvc: MarketStatusService) {}

  ngOnInit(): void {
    console.log('In OnInit');
    this.marketStatusSvc.getInitialMarketStatus()
    .subscribe( prices => {
        this.marketStatus = prices;
        this.marketStatusToPlot = prices;
      }
    );
  }
}
