import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article.service';
import { AddarticleComponent } from '../addarticle/addarticle.component';
import pdfMake from 'pdfmake/build/pdfmake';
import {map} from 'rxjs/operators';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Article } from 'src/app/model/article';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listearticle',
  templateUrl: './listearticle.component.html',
  styleUrls: ['./listearticle.component.css']
})
export class ListearticleComponent implements OnInit {
 public articles;
 p: number = 1;
  constructor(private articleService:ArticleService,private toastr: ToastrService,private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.getArticle();
    this.getData();
  }
  getArticle(){
    this.articleService.getArticle()
       .subscribe(data=>{
         this.articles = data;
         console.log(this.articles);
       }, err=>{
          console.log(err);
       })
  }
  getData() {
    this.articleService.getAll1().subscribe(
      response =>{this.articleService.listData = response;console.log(this.articleService.listData)}
     );
   
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose= false;
    dialogConfig.autoFocus = true;
    dialogConfig.width="50%";
    this.dialog.open(AddarticleComponent,dialogConfig);
   }
   modifier(article){
    let navigationExtras: NavigationExtras={
      queryParams:{
        special:btoa(JSON.stringify(article))
      }
    };
    this.router.navigate(['updatearticle'],navigationExtras);
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
         text:'Liste des atricles',
         bold:true,
         fontSize:20,
         alignment:'center',
         margin:[0,0,0,20]
       },

       this.getList(this.articleService.listData),
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
 getList(items: Article[]){
     return{
       table:{
          widths:['*','*','*','*','*'],
          body:[
            [
            {
              text:'Designation',
              style:'tableHeader'
            },
            {
              text:'Prix achat',
              style:'tableHeader'
            },
            {
              text:'Prix vente',
              style:'tableHeader'
            },
            {
              text:'Tva',
              style:'tableHeader'
            },
            {
              text:'Qte',
              style:'tableHeader'
            },
            
            ],
            ...items.map(ed=>{
              return[ed.libelle,ed.pa,ed.pv,ed.tva,ed.stock];
            })
          ]
       }
     }
 }
}
