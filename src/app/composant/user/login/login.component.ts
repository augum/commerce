import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any={};
  loginname : String;
  password : String;
  errorMessage:string;  
  name : string; 
  magasin; 
  role:string;
  Wdate;
  annee : 0;
  constructor(private router:Router,private userService : UserService,
    public toastr: ToastrService,private datePipe : DatePipe) { }    
  ngOnInit() {    
     this.userService.islogin = false;
     this.userService.admin = false;
     this.userService.suser = false;
     this.Wdate = this.transformDate(new Date());
     this.annee = (this.Wdate).toString().substring(0,4);
     localStorage.setItem('annee', this.annee.toString());
  }    
  login() {
    
    this.userService.login(this.loginname).subscribe(
      response =>{this.user = response;
         
       if (this.user.pwd == this.password)
       {
         
        this.name = this.user.nom;
        this.magasin = this.user.idMagasin;
        this.role = this.user.role;
        localStorage.setItem('name', this.name);
        localStorage.setItem('magasin', this.magasin);
        localStorage.setItem('role', this.role);
         this.userService.islogin = true;
        if (this.user.role  == "Admin")
         {
          this.userService.admin = true;
          this.router.navigate(['']);
     
     
      }
      else
      {
        this.userService.suser = true;
        this.router.navigate(['']);
        
      }
       }
              else
              {
                this.toastr.warning( 'Mot de Passe  Incorrecte ')
               }

          },
          error => 
          
            this.toastr.warning( 'Login Incorrecte ')
         
          
          );
     
   
        
    
    }
    inscrire()
    {
      this.router.navigate(['/client']);
    }
    

    transformDate(date){
      return this.datePipe.transform(date, 'yyyy-MM-dd');
    }
    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('name');
      
  }

}
