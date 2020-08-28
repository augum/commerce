import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Magasin} from '../model/magasin';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  private baseUrl = '/api/magasins';
  public host:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getMagasin(): Observable<any>{
     return this.http.get(this.host+"/magasins");
  }

  public addmagasin(magasin:Magasin){
      return this.http.post(this.host+"/magasins",magasin);
 }
 public updateMagasin(url:string,magasin:Magasin){
  return this.http.patch(url,magasin);
}
supprimerMagasin(url:string){
  return this.http.delete(url);
 }
 getAll(): Observable<any> {
  return this.http.get(`${this.baseUrl}`);
}
}
