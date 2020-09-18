import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';
import { MatDialogConfig, MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {

  isSubmitted:boolean;
  formtemplate = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    libelle: new FormControl('',Validators.required)
  })
  constructor(private categorieservice:CategorieService,private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA)  public data,
        public dialogRef:MatDialogRef<AddcategorieComponent>) { }

  ngOnInit(): void {
    this.ressetForm();
  }
  addCategorie(formValue){
    this.isSubmitted= true;
    if(this.formtemplate.valid){
      formValue.code = formValue.libelle.replace(/[aeiouyAEIOUY]/g,"").toUpperCase()+new Date().getTime();
      this.categorieservice.addCategorie(formValue)
      .subscribe(data=>{
        this.toastr.success('Categorie enregistrée avec succès');
        this.ressetForm();
     }, error => {
      console.log(error);
      this.toastr.error('Erreur','le Categorie non enregistrée');
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
  });
}
}
