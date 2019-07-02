import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from "../data.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {

  events: object;
  constructor(private _data:DataService , 
    private _router : Router
    ) { }

  ngOnInit() {
    this._data.getEvents().then(res => {
      res.json().then(res =>{
        this.events = res;
               
      })
    })
  }

  bookTicket = (event) =>{
      this._router.navigate(["/event" , event.seats , event.name])
  }

}
