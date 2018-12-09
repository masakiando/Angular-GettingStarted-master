import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }     from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { WelcomeComponent } from './home/welcome.component';
import { MarketChartComponent } from './market-chart/market-chart.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [//
    AppComponent,
    WelcomeComponent,
    CustomerComponent,
    MarketChartComponent
  ],
  imports: [//
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'customer', component: CustomerComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
