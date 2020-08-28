import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name  = '';
  magasin  ;
  annee = 0;
  role='';
    constructor( public userService : UserService,private router:Router) { }
  
    ngOnInit(): void {
      this.name = localStorage.getItem('name');
      this.magasin = localStorage.getItem('magasin');
      this.role = localStorage.getItem('role');
      this.annee = parseInt(localStorage.getItem('annee'));
  
    }
    public logout() {
      localStorage.removeItem('name');
      localStorage.removeItem('magasin');
      localStorage.removeItem('role');
      //location.reload();
      this.router.navigate(['login']);
    }
}
