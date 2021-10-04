import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {StocksService} from './services/stocks.service';
import { SummmaryComponent } from './components/summmary/summmary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import {AppRoutes } from './app.routing'
@NgModule({
  declarations: [
    AppComponent,
    SummmaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [StocksService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
