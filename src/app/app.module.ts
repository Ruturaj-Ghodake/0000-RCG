import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { IndexADateComponent } from './index-adate/index-adate.component';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexADateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
