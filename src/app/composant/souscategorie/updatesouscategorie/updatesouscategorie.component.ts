import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatesouscategorie',
  templateUrl: './updatesouscategorie.component.html',
  styleUrls: ['./updatesouscategorie.component.css']
})
export class UpdatesouscategorieComponent implements OnInit {
  public data;
  constructor(private activatedRoute: ActivatedRoute,private scategorieService:SouscategorieService,private route:Router,private toastr: ToastrService) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(atob(params.special));
        console.log(this.data);
      }
    });
  }

  ngOnInit(): void {
  }
  modifier(){
    let url=this.data._links.scategorie.href
       this.scategorieService.updateSCategoriet(url,this.data)
         .subscribe(data=>{
           this.route.navigate(['listesouscategorie']);
           this.toastr.success('sous categorie modifiée avec succès');
         }, error => {
          this.toastr.error('sous categorie non modifié avec succès');
           console.log(error);
         })
  }
}
