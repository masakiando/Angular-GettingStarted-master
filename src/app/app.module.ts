import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }     from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { WelcomeComponent } from './home/welcome.component';
import { AAAComponent } from './aaa/aaa-list.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskComponent } from './tasks/task.component';
import { EnterTaskComponent } from './tasks/enter-task.component';
import { MarketChartComponent } from './market-chart/market-chart.component';
import { ProductModule } from './products/product.module';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import {TaskService} from './tasks/task.service';
@NgModule({
  declarations: [//
    AppComponent,
    WelcomeComponent,
    CustomerComponent,
    MarketChartComponent,
    AAAComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent
  ],
  imports: [//
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'aaa', component: AAAComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
