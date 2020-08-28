import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from '../model/client';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = '/api/clients';
  choixmenu : string  = 'A';
  public dataForm:  FormGroup; 
  public host:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getClient(){
     return this.http.get(this.host+"/clients");
  }
  public getClients(){
    return this.http.get(this.host+"/client");
 }

  public addClient(client:Client){
      return this.http.post(this.host+"/clients",client);
 }
 public updateClient(url:string,client:Client){
  return this.http.patch(url,client);
}
supprimerClient(url:string){
  return this.http.delete(url);
 }
 getData(id: number): Observable<Object> {
  return this.http.get(`${this.baseUrl}/${id}`);
}
 getAll(): Observable<any> {
  return this.http.get(`${this.baseUrl}`);
}
}
