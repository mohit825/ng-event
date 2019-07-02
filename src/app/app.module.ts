import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventBookingComponent } from './event-booking/event-booking.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { FiltertextPipe } from './filtertext.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EventListingComponent,
    EventBookingComponent,
    HomeComponent,
    FiltertextPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
