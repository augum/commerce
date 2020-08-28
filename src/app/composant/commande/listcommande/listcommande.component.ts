import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommandeService } from 'src/app/services/commande.service';
import { Commande } from 'src/app/model/commande';
import { DatePipe } from '@angular/common';
import pdfMake from 'pdfmake/build/pdfmake';
import {map} from 'rxjs/operators';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }

from '@angular/forms';
@Component({
  selector: 'app-list-commande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.scss']
})
export class ListcommandeComponent implements OnInit {
  commandeListe;
  p: number = 1;
  SearchText :string;
  constructor( private service :CommandeService,private router:Router,
    private toastr :ToastrService,public fb: FormBuilder,
    private datePipe : DatePipe) { }

  ngOnInit() {
    
    this.refreshListe();
    
  }
refreshListe(){
  this.service.getAll().subscribe(
    response =>{this.commandeListe = response;}
   );

}


  onDelete(id: number) {
   
    if (window.confirm('Are sure you want to delete this Article ?')) {
      this.service.deleteAll(id)
        .subscribe(
          data => {
            console.log(data);
            this.toastr.warning(' data successfully deleted!'); 
            this.refreshListe();
          },
          error => console.log(error));
    }
  }
newComm()
  {
    this.service.choixmenu ="A"
  this.router.navigate(['/commande']);
  }

onSelect(item :Commande){
  
  this.service.formData = this.fb.group(Object.assign({},item));
  this.service.choixmenu ="M"
  this.router.navigate(['/commande']);
}
transformDate(date){
  return this.datePipe.transform(date, 'yyyy-MM-dd');
}
ongeneratePDF(id:number){
  const document = this.service.getDocument(id);
  pdfMake.createPdf(document).open();
}
}

