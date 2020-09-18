import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addsoucategorie',
  templateUrl: './addsoucategorie.component.html',
  styleUrls: ['./addsoucategorie.component.css']
})
export class AddsoucategorieComponent implements OnInit {
  isSubmitted:boolean;
  public categories;
  formtemplate = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    libelle: new FormControl('',Validators.required),
    code_categ: new FormControl('',Validators.required)
  })
  constructor(private scategorieservice:SouscategorieService,private toastr: ToastrService,private categorieService:CategorieService,
    @Inject(MAT_DIALOG_DATA)  public data,
        public dialogRef:MatDialogRef<AddsoucategorieComponent>) { }

  ngOnInit(): void {
    this.getCategorie();
  }
  addCategorie(formValue){
    this.isSubmitted= true;
    if(this.formtemplate.valid){
      formValue.code = formValue.libelle.replace(/[aeiouyAEIOUY]/g,"").toUpperCase()+new Date().getTime();
      this.scategorieservice.addSCategorie(formValue)
      .subscribe(data=>{
        this.toastr.success('Sous categorie enregistrée avec succès');
        this.ressetForm();
     }, error => {
      console.log(error);
      this.toastr.error('Erreur','Sous categorie non enregistrée');
    })
  };
  this.dialogRef.close();
}
get formControls(){
  return this.formtemplate['controls'];
}
ressetForm(){
  this.formtemplate.reset();
  this.formtemplate.setValue({
   id:'',
   code:'',
   libelle:'',
   code_categ:''
  });
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
}
