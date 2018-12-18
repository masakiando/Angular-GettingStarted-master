import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { WelcomeComponent } from './home/welcome.component';
import { AAAComponent } from './aaa/aaa-list.component';
import { MarketChartComponent } from './market-chart/market-chart.component';
import { ProductModule } from './products/product.module';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskComponent } from './tasks/task/task.component';
import { EnterTaskComponent } from './tasks/enter-task/enter-task.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { TaskService } from './tasks/task.service';
import { ToggleComponent } from './ui/toggle/toggle.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseService } from './course/course.service';
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
    CheckboxComponent,
    ToggleComponent,
    CourseListComponent
  ],
  imports: [//
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'courses', component: CourseListComponent },
      { path: 'aaa', component: AAAComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    ReactiveFormsModule
  ],
  providers: [TaskService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
