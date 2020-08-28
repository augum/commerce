import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatearticle',
  templateUrl: './updatearticle.component.html',
  styleUrls: ['./updatearticle.component.css']
})
export class UpdatearticleComponent implements OnInit {
  public data;
  public qte:number;
  constructor(private articleService:ArticleService,private activatedRoute: ActivatedRoute,private route:Router,private toastr: ToastrService) { 
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
    let url=this.data.id
    this.data.stock = this.data.stock + this.qte;
    this.data.stkinit = this.data.stock - this.qte;
       this.articleService.updateArticle(url,this.data)
         .subscribe(data=>{
           this.route.navigate(['listearticle']);
           this.toastr.success('Article modifiée avec succès');
         }, error => {
          this.toastr.error('Article non modifié');
           console.log(error);
         })
  }
}
