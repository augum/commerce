
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lcommande } from '../model/lcommande';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }from '@angular/forms';
import { ClientService } from './client.service';
import { LcommandeService } from './lcommande.service';
import { LcommandemagService } from './lcommandemag.service';


@Injectable({
  providedIn: 'root'
})
export class CommandemagService implements OnInit {
  private baseUrl = '/api/commMags';
  public formData:  FormGroup; 
  list: any={};
  livr;
  llivr;
  client;
  
  constructor(private http:HttpClient,private toastr: ToastrService,private clientService:ClientService,
    private llservice:LcommandemagService) { }
    ngOnInit() {
    
      this.livr ="";
      this.llivr = "";
      
    }
  choixmenu : string  = "A";
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  saveOrUpdate(info: Object) {
    localStorage.setItem("Depot",JSON.stringify(info));
   return this.http.post(`${this.baseUrl}`,info);
   
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  deleteAll(id: number): Observable<any> {
  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
   
}
