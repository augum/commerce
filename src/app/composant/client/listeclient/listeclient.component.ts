import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../services/client.service';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddclientComponent } from '../addclient/addclient.component';

@Component({
  selector: 'app-listeclient',
  templateUrl: './listeclient.component.html',
  styleUrls: ['./listeclient.component.css']
})
export class ListeclientComponent implements OnInit {
  public clients;
  constructor(private clientservice:ClientService,private router:Router,private toastr: ToastrService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getClient();
  }
 getClient(){
   this.clientservice.getClient()
      .subscribe(data=>{
        this.clients = data;
        console.log(this.clients);
      }, err=>{
         console.log(err);
      })
 }
 modifier(client){
  if(window.confirm('Are you sure to update?'+' '+ client.libelle)){
    let navigationExtras: NavigationExtras={
      queryParams:{
        special:btoa(JSON.stringify(client))
      }
    };
    this.router.navigate(['updateclient'],navigationExtras);
  }
 }
 supprimer(client){
   if(window.confirm('Are you sure to delete?'+' '+ client.libelle)){
    let url= client._links.client.href;
    this.clientservice.supprimerClient(url)
         .subscribe(data=>{
           this.toastr.success('Client supprimé avec succès');
           this.getClient();
         }, error => {
          this.toastr.success('Client non supprimé');
           console.log(error);
         })
   } 
 }
 onCreate(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width="50%";
  this.dialog.open(AddclientComponent,dialogConfig).afterClosed().subscribe(b10=>{
    this.getClient();
  });
 }

 
}
