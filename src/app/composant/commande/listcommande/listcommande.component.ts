import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommandeService } from 'src/app/services/commande.service';
import { Commande } from 'src/app/model/commande';
import { DatePipe } from '@angular/common';
import pdfMake from 'pdfmake/build/pdfmake';
import {map} from 'rxjs/operators';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }

from '@angular/forms';
@Component({
  selector: 'app-list-commande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.scss']
})
export class ListcommandeComponent implements OnInit {
  commandeListe;
  p: number = 1;
  SearchText :string;
  constructor( private service :CommandeService,private router:Router,
    private toastr :ToastrService,public fb: FormBuilder,
    private datePipe : DatePipe) { }

  ngOnInit() {
    
    this.refreshListe();
    this.getData();
    
  }
refreshListe(){
  this.service.getAll1().subscribe(
    response =>{this.commandeListe = response;}
   );

}

  onDelete(id: number) {
   
    if (window.confirm('Are sure you want to delete this Article ?')) {
      this.service.deleteAll(id)
        .subscribe(
          data => {
            console.log(data);
            this.toastr.warning(' data successfully deleted!'); 
            this.refreshListe();
          },
          error => console.log(error));
    }
  }
newComm()
  {
    this.service.choixmenu ="A"
  this.router.navigate(['/commande']);
  }

onSelect(item :Commande){
  
  this.service.formData = this.fb.group(Object.assign({},item));
  this.service.choixmenu ="M"
  this.router.navigate(['/commande']);
}
transformDate(date){
  return this.datePipe.transform(date, 'yyyy-MM-dd');
}
getData() {
  this.service.getAll1().subscribe(
    response =>{this.service.listData = response;console.log(this.service.listData)}
   );
 
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
         text:'Général motors',
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
        text:'Liste des commandes',
        bold:true,
        fontSize:20,
        alignment:'center',
        margin:[0,0,0,20]
      },

      this.getList(this.service.listData),
      {

      },
      {
        text:'Signature',
        style:'sign',
        alignment:'right'
      },
      
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
getList(items: Commande[]){
  return{
    table:{
       widths:['*','*','*','*','*','*'],
       body:[
         [
         {
           text:'Numero',
           style:'tableHeader'
         },
         {
           text:'date',
           style:'tableHeader'
         },
         {
           text:'Libelle',
           style:'tableHeader'
         },
         {
           text:'Client',
           style:'tableHeader'
         },
         {
           text:'TTc',
           style:'tableHeader'
         },
         {
          text:'Moyen payement',
          style:'tableHeader'
        },
         
         ],
         ...items.map(ed=>{
           return[ed.numero,ed.date,ed.libelle,ed.lib_client,ed.totttc,ed.modepayement];
         })
       ]
    }
  }
}
}

