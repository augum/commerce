import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent implements OnInit {
 public data;
  constructor(private activatedRoute: ActivatedRoute,private categorieService:CategorieService,private route:Router,private toastr: ToastrService) {
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
    let url=this.data._links.categorie.href
       this.categorieService.updateCategoriet(url,this.data)
         .subscribe(data=>{
           this.route.navigate(['listecategorie']);
           this.toastr.success('Categorie modifiée avec succès');
         }, error => {
          this.toastr.success('Categorie non modifié avec succès');
           console.log(error);
         })
  }

}
