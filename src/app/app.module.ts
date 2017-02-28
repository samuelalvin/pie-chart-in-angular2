import { NgModule }      from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PieChartComponent }  from './pie-chart.component';
import { DataService }  from './data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    PieChartComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    DataService
  ]
})
export class AppModule { }
