import {Component} from '@angular/core';
import {MarketStatusService} from './market-status.service';
import {Observable} from 'rxjs';
import {MarketPrice} from './market-price';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
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
