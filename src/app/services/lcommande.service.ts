import { Injectable } from '@angular/core';
import { Lcommande } from '../model/lcommande';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LcommandeService {
  private baseUrl = '/api/lcomms';
  private baseUrl1 = '/api/lcom';
 
  lcommande : Lcommande = new Lcommande();
  lcommandeList : Lcommande[];
 
  constructor(private http: HttpClient) { }
  addLcomm(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
 getAll(id: number): Observable<Object> {
   return this.http.get(`${this.baseUrl}/${id}`);
 }
 getData1(id: number): Observable<Object> {
  return this.http.get(`${this.baseUrl1}/${id}`);
}
 
}
