import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { EventsFeedComponent } from './events-feed/events-feed.component';
import { AppRoutingModule } from 'src/app-routing.module';


import {CardModule} from 'primeng/card';
import { EventAdderComponent } from './event-adder/event-adder.component';

@NgModule({
  declarations: [AppComponent, EventsFeedComponent, EventAdderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule
    
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
