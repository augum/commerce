import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MagasinService } from 'src/app/services/magasin.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmagasin',
  templateUrl: './addmagasin.component.html',
  styleUrls: ['./addmagasin.component.css']
})
export class AddmagasinComponent implements OnInit {
  isSubmitted:boolean;
  formtemplate = new FormGroup({
    id: new FormControl(),
    libelle: new FormControl('',Validators.required),
    adresse: new FormControl('',Validators.required)
  })
  constructor(private magasinService:MagasinService,private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA)  public data,
  public dialogRef:MatDialogRef<AddmagasinComponent>,private router:Router) { }

  ngOnInit(): void {
    this.ressetForm();
  }
  addMagasin(formValue){
    this.isSubmitted= true;
    if(this.formtemplate.valid){
      this.magasinService.addmagasin(formValue)
      .subscribe(data=>{
        this.toastr.success('Magasin enregistré avec succès');
        this.ressetForm();
        this.dialogRef.close();
        this.router.navigate(['magasin']);
     }, error => {
      console.log(error);
      this.toastr.error('Erreur','le Magasin non enregistrée');
    })
  }
}
close(){
  this.dialogRef.close();
}
  get formControls(){
    return this.formtemplate['controls'];
  }
  ressetForm(){
    this.formtemplate.reset();
    this.formtemplate.setValue({
     id:'',
     libelle:'',
     adresse:'',
    });
  }
}
