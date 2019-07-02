import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent{

  constructor(private _route:ActivatedRoute, private _router:Router) { 
    this._route.params.subscribe((params)=>{
      console.log(params);
      
      this.name = params.name;
      this.leftSeats = params.seats
    })
  }

  name: string;
  leftSeats: string;
  dummyArr = [] ;
  onChange = (x) => {
    this.dummyArr= []
    console.log(x.viewModel);
    let j = x.viewModel;
    let i = 0
    for (i=0 ; i<j-1; i++){
      this.dummyArr.push(i)
        
    } 
    
  }

  submit = (f) =>{
    alert("You Have Successfully Booked the tickets")
    f.reset();
    console.log("You Have Successfully Booked the tickets");
    
  }
  onCancel = ()=>{

    this._router.navigate(["/event"])
  }
  
}
