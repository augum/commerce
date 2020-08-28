import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {
  data:Client;
  public client:Client = new Client();
  constructor(private activatedRoute: ActivatedRoute,private clientService:ClientService,private route:Router,private toastr: ToastrService) {
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
  let url=this.data._links.client.href
     this.clientService.updateClient(url,this.data)
       .subscribe(data=>{
         this.route.navigate(['listeclient']);
         this.toastr.success('Client modifié avec succès');
       }, error => {
        this.toastr.success('Client non modifié avec succès');
         console.log(error);
       })
}
}
