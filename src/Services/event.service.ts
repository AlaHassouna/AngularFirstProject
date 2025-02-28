import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Modeles/Evt';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  GetAllEvent():Observable<Evt[]>{
    return this.http.get<Evt[]>("http://localhost:3000/Evt")
  }
addEvent(event:Event): Observable<void> {
    return this.http.post<void>("http://localhost:3000/Evt", event);
  }
  getEventById(id:string): Observable<void> {
    return this.http.get<void>(`http://localhost:3000/Evt/${id}`);
  }
}
