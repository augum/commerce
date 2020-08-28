import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  public client:Client = new Client();
  isSubmitted:boolean;
  public add:string ="A";
  formtemplate = new FormGroup({
    code: new FormControl(),
    libelle: new FormControl('',Validators.required),
    adresse: new FormControl('',Validators.required),
    tel: new FormControl('',Validators.required),
    email: new FormControl()
  })
  constructor(private clientservice:ClientService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ressetForm();
  }

  addClient(formValue){
    if(this.add=="A"){
      this.isSubmitted= true;
    if(this.formtemplate.valid){
      formValue.codel = formValue.libelle.replace(/[aeiouyAEIOUY]/g,"").toUpperCase()+new Date().getTime();
      this.clientservice.addClient(formValue)
      .subscribe(data=>{
        this.toastr.success('Client enregistré avec succès');
        this.ressetForm();
     }, error => {
      console.log(error);
      this.toastr.error('Erreur','le client non enregistré');
    })
    }
    }else{
      
    }
  }
  get formControls(){
    return this.formtemplate['controls'];
 }
  ressetForm(){
    this.formtemplate.reset();
    this.formtemplate.setValue({
     code:'',
     libelle:'',
     adresse:'',
     tel:'',
     email:''
    });
 }
}
