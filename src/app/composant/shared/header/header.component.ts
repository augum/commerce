import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
//import { PanierService } from 'src/app/services/panier.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() toogleSideBarForMe:EventEmitter<any> = new EventEmitter();
 name  = '';
  magasin  ;
  annee = 0;
  constructor(public userService : UserService,private router:Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.magasin = localStorage.getItem('magasin');
    this.annee = parseInt(localStorage.getItem('annee'));

  }
  public logout() {
      localStorage.removeItem('name');
      localStorage.removeItem('magasin');
      localStorage.removeItem('role');
      //location.reload();
      this.router.navigate(['login']);
  }

  toogleSideBar() {
     this.toogleSideBarForMe.emit();
  }
}
