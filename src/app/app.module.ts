import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';
import { SummaryResultComponent } from './summary-result/summary-result.component';
import { UserEventsComponent } from './user-events/user-events.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    SummaryResultComponent,
    UserEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
