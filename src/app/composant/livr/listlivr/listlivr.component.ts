
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LivrService } from 'src/app/services/livr.service';
import { Livr } from 'src/app/model/livr';
import { DatePipe } from '@angular/common';
import pdfMake from 'pdfmake/build/pdfmake';
import {map} from 'rxjs/operators';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Component({
  selector: 'app-listlivr',
  templateUrl: './listlivr.component.html',
  styleUrls: ['./listlivr.component.scss']
})
export class ListlivrComponent implements OnInit {
  commandeListe;
  SearchText :string;
  p: number = 1;
  constructor( private service :LivrService,private router:Router,
    private toastr :ToastrService,public fb: FormBuilder,
    private datePipe : DatePipe) { }

    ngOnInit() {
    
      this.refreshListe();
      
    }
  refreshListe(){
    this.service.getAll1().subscribe(
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
    this.router.navigate(['/livraison']);
    }
  
  onSelect(item :Livr){
    
    this.service.formData = this.fb.group(Object.assign({},item));
    this.service.choixmenu ="M"
    this.router.navigate(['/livraison']);
  }
  transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  ongeneratePDF(id:number){
    const document = this.service.getDocument(id);
    pdfMake.createPdf(document).open();
  }
}



