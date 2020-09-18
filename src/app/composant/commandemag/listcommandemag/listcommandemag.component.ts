import { Component, OnInit } from '@angular/core';
import { CommandemagService } from 'src/app/services/commandemag.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { CommandeMag } from 'src/app/model/commandemag';

@Component({
  selector: 'app-listcommandemag',
  templateUrl: './listcommandemag.component.html',
  styleUrls: ['./listcommandemag.component.css']
})
export class ListcommandemagComponent implements OnInit {

  commandeListe;
  p: number = 1;
  SearchText :string;
  constructor( private service :CommandemagService,private router:Router,
    private toastr :ToastrService,public fb: FormBuilder,
    private datePipe : DatePipe) { }

  ngOnInit() {
    
    this.refreshListe();
    //this.getData();
    
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
this.router.navigate(['/commandemag']);
}

onSelect(item :CommandeMag){

this.service.formData = this.fb.group(Object.assign({},item));
this.service.choixmenu ="M"
this.router.navigate(['/commandemag']);
}
transformDate(date){
return this.datePipe.transform(date, 'yyyy-MM-dd');
}
}
