
import { Injectable } from '@angular/core';
import { LcommandeMag } from '../model/lcommandemag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LcommandemagService {
  private baseUrl = '/api/lcommsMag';
  private baseUrl1 = '/api/lcommMag';
 
  lcommande : LcommandeMag = new LcommandeMag();
  lcommandeList : LcommandeMag[];
 
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
