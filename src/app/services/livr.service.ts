import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livr } from '../model/livr';
import { Llivr } from '../model/llivr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { ClientService } from './client.service';
import { style } from '@angular/animations';
import { LlivrService } from './llivr.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LivrService {
  private baseUrl = '/api/Livrs';
  public host:string="http://localhost:8080";
  public formData:  FormGroup; 
  livr;
  llivr;
  client;
  list: any={}
  commande : Livr;
  mag;
  datej;
  constructor(private http:HttpClient,private toastr: ToastrService,private clientService:ClientService,
    private llservice:LlivrService,private datePipe : DatePipe) { }
    choixmenu : string  = "A";
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  saveOrUpdate(info: Object): Observable<Object> {
    localStorage.setItem("Livraison",JSON.stringify(info));
    return this.http.post(`${this.baseUrl}`, info);
  }
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  deleteAll(id: number): Observable<any> {
  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getAll1(): Observable<any> {
    this.mag = localStorage.getItem('magasin');
    this.datej = this.transformDate(new Date(Date.now()));
    return this.http.get(this.host+"/api/livrsd?"+"mag="+this.mag+"&"+"date="+this.datej);
  }
  transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  getDocument(id:number){
    this.getData(id).subscribe(
    response=>{
      this.livr = response;
      console.log(this.livr);
    });
    this.llservice.getData1(this.livr.numero).subscribe(
      response =>{
        this.llivr = response;
        console.log(this.llivr);
      }
    )
    this.clientService.getData(this.livr.code_client).subscribe(
      response=>{
        this.client = response;
      }
    );
    sessionStorage.setItem('livr',JSON.stringify(this.livr));
    return{
      content:[
        {
          text:'GENERAL MOTOR',
          style:'name'
        },
        {
          text:'kinshasa',
          style:'name'
        },
        {
          text:'FACTURE',
          bold:true,
          fontSize: 20,
          alignment: 'center',
          margin:[0,20,20,0]
        },
        {
          columns:[
            [
              {
                text:'Numero:'+ this.livr.numero,
                style:'ligne',
                margin:[0,10,0,0]
              },
              {
                text:'Date:' + this.livr.date_liv,
                style:'ligne',
                margin:[0,10,0,0]
              },
              {
                text:'Code: '+ this.livr.code_client,
                style:'ligne1',
                margin:[0,10,0,0]
              },
              {
                text:'Nom client: '+ this.livr.lib_client,
                style:'ligne1',
                margin:[0,10,0,0]
              },
            ],
          ]
        },

        this.getDetails(this.llivr),
        {

        },
        {
          text:' ',
          style:'header'
        },
        {
          text: 'Tot ht: '+this.livr.totht + '  Tot rem: '+this.livr.totrem + ' Tot fodec: '+this.livr.totfodec 
          + ' Tot tva: '+this.livr.tottva +' Tot ttc : '+this.livr.totttc +'',
          style:'total'
        },
        {
          text:'Signature',
          style:'sign',
          alignment: 'right'
        }
      ],
      styles:{
        header:{
          fontSize: 16,
          bold: true,
          alignement: 'center'
        }
      }
    }
  }
  getDetails(items: Llivr[]){
    return{
      table:{
        widths:[200,50,50,50,50,50],
        body:[
          [
            {
              text: 'Designation',
              style:'tableHeader'
            },
            {
              text: 'Prix',
              style:'tableHeader'
            },
            {
              text: 'QTe',
              style:'tableHeader'
            },
            {
              text: 'Tva',
              style:'tableHeader'
            },
            {
              text: 'Mont ht',
              style:'tableHeader'
            },
          ],

          ...items.map(ed=>{
            return[ed.libart,ed.pu,ed.qte,ed.tva,ed.totht];
          })
        ]
      }
    };

  }
}
