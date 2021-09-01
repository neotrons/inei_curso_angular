import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { HomePage } from './pages/home/home.page';
import { ReportContainerComponent } from './report-container/report-container.component';
import { ReportTableComponent } from './report-table/report-table.component';


@NgModule({
  declarations: [
    HomePage,
    ReportContainerComponent,
    ReportTableComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
