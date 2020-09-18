import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';
import { AddsoucategorieComponent } from '../addsoucategorie/addsoucategorie.component';

@Component({
  selector: 'app-listesouscategorie',
  templateUrl: './listesouscategorie.component.html',
  styleUrls: ['./listesouscategorie.component.css']
})
export class ListesouscategorieComponent implements OnInit {
 public sousCats;
  constructor(private categorieService:CategorieService,private souscategorieService:SouscategorieService,private toastr: ToastrService,private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.getSCategorie();
  }

  getSCategorie(){
    this.souscategorieService.getSCategorie()
       .subscribe(data=>{
         this.sousCats = data;
         console.log(this.sousCats);
       }, err=>{
          console.log(err);
       })
  }
  supprimer(scategorie){
   if(window.confirm('Are you sure to delete catégorie'+' '+ scategorie.libelle +' '+'?')){
    let url= scategorie._links.scategorie.href;
    this.souscategorieService.supprimerSCategorie(url)
         .subscribe(data=>{
           this.toastr.success('Sous catégorie supprimée avec succès');
           this.getSCategorie();
         }, error => {
          this.toastr.error('Sous catégorie non supprimée');
           console.log(error);
         })
   } 
 }
modifier(souscategorie){
    let navigationExtras: NavigationExtras={
      queryParams:{
        special:btoa(JSON.stringify(souscategorie))
      }
    };
    this.router.navigate(['updatesouscategorie'],navigationExtras);
 }
 onCreate(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose= true;
  dialogConfig.autoFocus = true;
  dialogConfig.width="50%";
  this.dialog.open(AddsoucategorieComponent,dialogConfig).afterClosed().subscribe(f=>{
    this.getSCategorie();
  });
 }
}
