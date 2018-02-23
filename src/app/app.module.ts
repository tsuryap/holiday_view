import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HollistComponent } from './hollist/hollist.component';
import { HoldetailComponent } from './holdetail/holdetail.component';

import { HoliListService } from './holi-list.service';

import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
 } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HollistComponent,
    HoldetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [HoliListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
