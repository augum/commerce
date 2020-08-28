import { Component, OnInit } from '@angular/core';
import { LivrService } from 'src/app/services/livr.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Livr } from 'src/app/model/livr';

@Component({
  selector: 'app-listllivr',
  templateUrl: './listllivr.component.html',
  styleUrls: ['./listllivr.component.css']
})
export class ListllivrComponent implements OnInit {

  commandeListe;
  SearchText :string;
  constructor( private service :LivrService,private router:Router,
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

  openForEdit(Id:number){
   this.router.navigate(['/commandes/modification/'+Id]);
  }

  removeData(id: number) {
    
  }

  onCommandeDelete(id:number){
  
}

selectCommande(item :Livr){
  this.service.formData = this.fb.group(Object.assign({},item));
  
  this.router.navigate(['/livraison']);
}
transformDate(date){
  return this.datePipe.transform(date, 'yyyy-MM-dd');
}
}
