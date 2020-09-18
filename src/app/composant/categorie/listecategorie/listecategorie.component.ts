import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../services/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddcategorieComponent } from '../addcategorie/addcategorie.component';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listecategorie',
  templateUrl: './listecategorie.component.html',
  styleUrls: ['./listecategorie.component.css']
})
export class ListecategorieComponent implements OnInit {
 public categories;
  constructor(private categorieService:CategorieService,private toastr: ToastrService,private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.getCategorie();
  }
  getCategorie(){
    this.categorieService.getCategorie()
       .subscribe(data=>{
         this.categories = data;
         console.log(this.categories);
       }, err=>{
          console.log(err);
       })
  }
  supprimer(categorie){
   if(window.confirm('Are you sure to delete catégorie'+' '+ categorie.libelle +' '+'?')){
    let url= categorie._links.categorie.href;
    this.categorieService.supprimerCategorie(url)
         .subscribe(data=>{
           this.toastr.success('Catégorie supprimée avec succès');
           this.getCategorie();
         }, error => {
          this.toastr.success('Catégorie non supprimée');
           console.log(error);
         })
   } 
 }
modifier(categorie){
    let navigationExtras: NavigationExtras={
      queryParams:{
        special:btoa(JSON.stringify(categorie))
      }
    };
    this.router.navigate(['updatecategorie'],navigationExtras);
 }
 onCreate(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width="50%";
  this.dialog.open(AddcategorieComponent,dialogConfig).afterClosed().subscribe(b10=>{
    this.getCategorie();
  });
 }
}
