import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalTransactionsComponent } from './components/total-transactions/total-transactions.component';
import { AverageSaleComponent } from './components/average-sale/average-sale.component';
import { AverageMarginComponent } from './components/average-margin/average-margin.component';
import { TotalMarginComponent } from './components/total-margin/total-margin.component';
import { PaymentsCashComponent } from './components/payments-cash/payments-cash.component';
import { CardPaymentsComponent } from './components/card-payments/card-payments.component';
import { CreditPaymentsComponent } from './components/credit-payments/credit-payments.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardPage1Component } from './pages/dashboard-page1/dashboard-page1.component';
import {RouterModule} from '@angular/router'



@NgModule({
  declarations: [
    TotalTransactionsComponent,
    AverageSaleComponent,
    AverageMarginComponent,
    TotalMarginComponent,
    PaymentsCashComponent,
    CardPaymentsComponent,
    CreditPaymentsComponent,
    DashboardComponent,
    DashboardPage1Component
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class DashboardModule { }
