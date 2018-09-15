import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Point } from '../shared/point';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapasService {
  private _url: string = "../assets/Data/lugares.json";
  
  // variable http que instancia la clase HttpClient
  constructor(private http: HttpClient) { }
  getPuntos(): Observable<Point[]>{
    return this.http.get<Point[]>(this._url);
}
}