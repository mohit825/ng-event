import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EventListingComponent} from "./event-listing/event-listing.component";
import {EventBookingComponent} from "./event-booking/event-booking.component";
const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path: 'event' , component: EventListingComponent
  },
  {
    path: 'event/:seats/:name' , component: EventBookingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
