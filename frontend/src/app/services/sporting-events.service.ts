import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SportingEvent} from '../models/sporting-events.model'
@Injectable({
  providedIn: 'root'
})
export class SportingEventsService {

  private URL = 'http://localhost:3000/api/events'

  selectedSportingEvent: SportingEvent;

  sportingEvents: SportingEvent[];

  constructor(private http:HttpClient) { 

    this.selectedSportingEvent= new SportingEvent();
  }

  getSportingEvents(){ 
    return this.http.get(this.URL);
  }

}
