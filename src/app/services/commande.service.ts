import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
import { Lcommande } from '../model/lcommande';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }from '@angular/forms';
import { ClientService } from './client.service';
import { LcommandeService } from './lcommande.service';


@Injectable({
  providedIn: 'root'
})
export class CommandeService implements OnInit {
  private baseUrl = '/api/comms';
  public formData:  FormGroup; 
  list: any={};
  livr;
  llivr;
  client;
  commande : Commande;
 
  constructor(private http:HttpClient,private toastr: ToastrService,private clientService:ClientService,
    private llservice:LcommandeService) { }
    ngOnInit() {
    
      this.livr ="";
      this.llivr = "";
      
    }
  choixmenu : string  = "A";
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  saveOrUpdate(info: Object) {
    //localStorage.setItem("Commande",JSON.stringify(info));
   return this.http.post(`${this.baseUrl}`,info);
   
  }
  saveOrUpdate1(info: Object) {
    localStorage.setItem("Commande",JSON.stringify(info));
   
  }

  
  
  //saveOrUpdate(info: Object): Observable<Object> {
  
   // return this.http.post(`${this.baseUrl}`, info);
  //}
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
    /*sessionStorage.setItem('livr',JSON.stringify(this.livr));*/
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
    this.livr="";
  }
  getDetails(items: Lcommande[]){
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
