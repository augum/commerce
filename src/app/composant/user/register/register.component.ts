import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MagasinService } from 'src/app/services/magasin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public magasins;
  constructor(public crudApi: UserService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private magasinService:MagasinService) { }

  ngOnInit() {
  
   this.getMagasin();
    this.infoForm();
   }

  
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: null,
        nom: ['', [Validators.required, Validators.minLength(5)]],
        role: ['', [Validators.required, Validators.minLength(8)]],
        login: ['', [Validators.required, Validators.minLength(8)]],
        pwd: ['', [Validators.required, Validators.minLength(8)]],
        pwdd: ['', [Validators.required, Validators.minLength(8)]],
        idMagasin:['', [Validators.required, Validators.minLength(8)]],
        });
    }
   
    getMagasin(){
      this.magasinService.getMagasin()
         .subscribe(data=>{
           this.magasins = data;
         }, err=>{
            console.log(err);
         })
    }

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
   
    if (this.crudApi.dataForm.value.pwd == this.crudApi.dataForm.value.pwdd)
    {
      if (this.crudApi.choixmenu == "A")
      {
        this.addData();
      }
      else
      {
       this.updateData()
      }
    }
    else
    {
      this.toastr.warning( 'Vérifiet votre de passe ...');  
    }
}
  
   

addData() {
  this.crudApi.createData(this.crudApi.dataForm.value).
  subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success'); 
    this.router.navigate(['/users']);
  });
}
  updateData()
  {
  
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
      this.toastr.success( 'Modification Faite avec Success');

      this.router.navigate(['/userss']);
    });
  }


}
