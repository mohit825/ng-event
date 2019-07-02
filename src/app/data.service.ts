import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "./assets/events.json";
  constructor(private _http:HttpClient) { }

  getEvents= () => {
   
   return fetch (this.url);
  };
}
