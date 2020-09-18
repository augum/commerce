import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { ClientService} from 'src/app/services/client.service';
import { CompteurService} from 'src/app/services/compteur.service';
import { Client} from 'src/app/model/client';
import { Compteur} from 'src/app/model/compteur';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute  } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Livr } from 'src/app/model/livr';
import { LivrService} from 'src/app/services/livr.service';
import { LlivrService} from 'src/app/services/llivr.service'
import { DatePipe } from '@angular/common';
import { AddllivrComponent } from '../addllivr/addllivr.component';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Observable } from "rxjs";
import { Article} from 'src/app/model/article';
import { Llivr} from 'src/app/model/llivr';
import pdfMake from 'pdfmake/build/pdfmake';
import {map} from 'rxjs/operators';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-addlivr',
  templateUrl: './addlivr.component.html',
  styleUrls: ['./addlivr.component.scss']
})
export class AddlivrComponent implements OnInit {

  ClientList: Client[];
  
  isValid:boolean = true;
  articleService: any;
  minDate ;
  Wdate;
  Date;
  compteur : any={};
  livr   : any= {};
  annee  = 0;
  facture;
  constructor(public service:LivrService,
    public compteurservice:CompteurService,
    private dialog:MatDialog,public fb: FormBuilder,
    public clientService :ClientService,
    private toastr :ToastrService,
    private router :Router,
    private currentRoute: ActivatedRoute,
    private lcommservice:LlivrService,
    private datePipe : DatePipe) { }
    get f() { return this.service.formData.controls; }

    ngOnInit() {

      if (this.service.choixmenu == "A"){
       this.InfoForm();
       this.service.list = [];
       this.Date = this.transformDate(new Date(Date.now()));
       this.annee = (this.Date).toString().substring(0,4);
       this.f['annee'].setValue(this.annee);
       this.f['date'].setValue(this.Date);
       this.f['mag'].setValue(localStorage.getItem('magasin'));
       this.onSelectCompteur(this.annee);
       }
         else
       {
       //this.service.getData(this.service.formData.value.id).subscribe(res=> {
      // this.service.formData =this.fb.group(Object.assign({},res));
      // });
       this.lcommservice.getAll(this.service.formData.value.numero).subscribe(
        response =>{this.service.list = response}
        );
        this.f['date'].setValue(this.service.formData.value.date);
       }
   
    this.clientService.getAll().subscribe(
     response =>{this.ClientList = response;}
    );
     }
   
   onSelectCompteur(id: number)
    {
     this.compteurservice.getData(id).subscribe(
       response =>{
         this.compteur = response;
         this.f['numero'].setValue(20200000 + this.compteur.numbl);
         }
      );  
    } 
      
       
   InfoForm() {
       this.service.formData = this.fb.group({
         id :null,
         annee : 0,
         numero : 0,
         date : '',
         code_client : 0,
         lib_client : '',
         libelle : '',
         totht : 0,
         tottva : 0,
         totttc : 0,
         mag:'',
         lcomms :[],
         });
       } 
     
   resetForm() {
         this.service.formData.reset();
     }
   
   AddData(lcommandeIndex,Id){  
       const dialogConfig = new MatDialogConfig();
       dialogConfig.autoFocus = true;
       dialogConfig.disableClose = true;
       dialogConfig.width="50%";
       dialogConfig.data={lcommandeIndex,Id};
       this.dialog.open(AddllivrComponent, dialogConfig).afterClosed().subscribe(b10=>{
         this.calcul();
       });
     }
   
     
   onDelete(item : Llivr,Id:number,i:number){
       if(Id != null)
       this.service.formData.value.id+=Id ;
      this.service.list.splice(i,1);
      this.calcul();
      }
   
   calcul(){
     this.f['totht'].setValue(this.service.list.reduce((prev, curr) => {
       return prev + curr.totht;
     }, 0));
     this.f['tottva'].setValue(this.service.list.reduce((prev, curr) => {
       return prev + curr.tottva;
     }, 0));
     this.f['totttc'].setValue(this.service.list.reduce((prev, curr) => {
       return prev + curr.totttc;
     }, 0));   
      
      }
   validateForm(){
        this.isValid = true ;
       
        if(this.service.formData.value.id_client==0)
        this.isValid =false;
       
        else if (this.service.list.length==0)
        this.isValid =false;
        return this.isValid;
      }
   
   onSubmit(){
       this.f['lcomms'].setValue(this.service.list);
         this.service.saveOrUpdate(this.service.formData.value).
         subscribe( data => {
           this.toastr.success( 'Validation Faite avec Success'); 
           
         });
         this.facture = JSON.parse(localStorage.getItem('Livraison'));
         this.generatePdf();
         this.router.navigate(['/llivr']);
      }
     
   transformDate(date){
        return this.datePipe.transform(date, 'yyyy-MM-dd');
      }
   OnSelectClient(ctrl)
      {
         if(ctrl.selectedIndex == 0){
          this.f['lib_client'].setValue('');
          this.f['code_client'].setValue('');
   
          
         }
         else{
            this.f['lib_client'].setValue(this.ClientList[ctrl.selectedIndex - 1].libelle);
            this.f['code_client'].setValue(this.ClientList[ctrl.selectedIndex - 1].code);
         }
       }

       generatePdf(){
        const documant =this.getDocument();
        pdfMake.createPdf(documant).open();
     }
     getDocument(){
       return{
         content:[
           
            
            {
              text:new Date().toLocaleDateString(),
              alignment:'right'
            },
            {
              text:new Date().toLocaleTimeString(),
              alignment:'right'
            },
            
            {
              text:'Champions  motors',
              style:'name'
            },
            {
              text:'vente des pièces de rechange auto',
              style:'ligne'
            },
            {
              text:'Email:samasoft@gmail.com',
              color:'blue',
            },
            {
              text:'Tel:0817454018',
              color:'blue',
            }, 
            {
              text:'Client '+ this.facture.lib_client,
              alignment:'right'
            },
            {
              text:'Client '+ this.facture.code_client,
              alignment:'right'
            },
            
           {
             text:'PROFORMAT N° '+this.facture.numero+localStorage.getItem('magasin'),
             bold:true,
             fontSize:20,
             alignment:'center',
             margin:[0,0,0,20]
           },
           {
            text:this.facture.libelle,
            bold:true,
            fontSize:20,
            alignment:'center',
            margin:[0,0,0,20]
          },
    
           this.getList(this.facture.lcomms),
           {
            
           },
           {
            text:' ',
            style:'header'
          },
          {
            text: 'Tot ht: '+this.facture.totht + ' CDF',
            style:'total'
          },
          {
            text: 'Tot tva: '+this.facture.tottva + ' CDF',
            style:'total'
          },
          {
            text: 'Tot TTC: '+this.facture.totttc + ' CDF',
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
             fontSize: 18,
             bold:true,
             margin:[0,20,0,10],
             decoration:'underline'
           },
           name:{
             fontsize: 16,
             bold:true
           },
           total:{
             fontSize:12,
             bold:true,
             italics:true
           },
           ligne:{
            fontSize:12,
            bold:true,
            italics:true
          },
           sign:{
             margin:[0,50,0,10],
             alignment:'right',
             italics:true
           },
           tableHeader:{
             bold:true,
             fontSize:15,
             alignment:'center'
           }
         }
       }
     }
     getList(items: Llivr[]){
      
      return{
        table:{
          widths:[200,30,30,100],
          body:[
            [
              {
                text: 'Désignation',
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
                text: 'Mont HT',
                style:'tableHeader'
              },
            ],
    
            ...items.map(ed=>{
              return[ed.libart,ed.pu,ed.qte,ed.totht];
            })
          ],
          alignment:'center',
        }
      };
    }    
       
}

