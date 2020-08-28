import { Component, OnInit } from '@angular/core';
import { MagasinService } from 'src/app/services/magasin.service';
import { ToastrService } from 'ngx-toastr';
import { AddmagasinComponent } from '../addmagasin/addmagasin.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-listmagasin',
  templateUrl: './listmagasin.component.html',
  styleUrls: ['./listmagasin.component.css']
})
export class ListmagasinComponent implements OnInit {
  public magasins;
  constructor(private magasinservice:MagasinService,private toastr:ToastrService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getmagasin();
  }
  removeData(magasin){
    if(window.confirm('Are you sure to delete magasin'+' '+ magasin.libelle +' '+'?')){
      let url= magasin._links.magasin.href;
      this.magasinservice.supprimerMagasin(url)
           .subscribe(data=>{
             this.toastr.success('Magasin supprimée avec succès');
             this.getmagasin();
           }, error => {
            this.toastr.warning('Magasin non supprimé');
             console.log(error);
           })
     } 
  }
  getmagasin(){
    this.magasinservice.getMagasin()
       .subscribe(data=>{
         this.magasins = data;
         console.log(this.magasins);
       }, err=>{
          console.log(err);
       })
  }
  addData(){  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    this.dialog.open(AddmagasinComponent, dialogConfig).afterClosed().subscribe(b10=>{
    });
  }
}
