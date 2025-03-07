import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Pub } from 'src/Modeles/Pub';


@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private http:HttpClient){ }
  getAllArticles():Observable<Pub[]>{
        return this.http.get<Pub[]>("http://localhost:3000/Pub")
    
  }

}
