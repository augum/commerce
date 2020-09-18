
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lcommande } from '../model/lcommande';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }from '@angular/forms';
import { ClientService } from './client.service';
import { LcommandeService } from './lcommande.service';
import { LcommandemagService } from './lcommandemag.service';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CommandemagService implements OnInit {
  private baseUrl = '/api/commMags';
  public host:string="http://localhost:8080";
  public formData:  FormGroup; 
  list: any={};
  livr;
  llivr;
  client;
  mag;
  datej;
  
  constructor(private http:HttpClient,private toastr: ToastrService,private clientService:ClientService,
    private llservice:LcommandemagService,private datePipe : DatePipe) { }
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
  getAll1(): Observable<any> {
    this.mag = localStorage.getItem('magasin');
    this.datej = this.transformDate(new Date(Date.now()));
    return this.http.get(this.host+"/api/commagsd?"+"mag="+this.mag+"&"+"date="+this.datej);
  }
  deleteAll(id: number): Observable<any> {
  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
   
}
