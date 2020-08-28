import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeclientComponent } from './composant/client/listeclient/listeclient.component';
import { AddclientComponent } from './composant/client/addclient/addclient.component';
import { UpdateclientComponent } from './composant/client/updateclient/updateclient.component';
import { ListecategorieComponent } from './composant/categorie/listecategorie/listecategorie.component';
import { AddcategorieComponent } from './composant/categorie/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './composant/categorie/updatecategorie/updatecategorie.component';
import { ListesouscategorieComponent } from './composant/souscategorie/listesouscategorie/listesouscategorie.component';
import { UpdatesouscategorieComponent } from './composant/souscategorie/updatesouscategorie/updatesouscategorie.component';
import { ListearticleComponent } from './composant/article/listearticle/listearticle.component';
import { AddarticleComponent } from './composant/article/addarticle/addarticle.component';
import { UpdatearticleComponent } from './composant/article/updatearticle/updatearticle.component';
import { AddcommandeComponent } from './composant/commande/addcommande/addcommande.component';
import { ListcommandeComponent } from './composant/commande/listcommande/listcommande.component';
import { AddlivrComponent } from './composant/livr/addlivr/addlivr.component';
import { ListlivrComponent } from './composant/livr/listlivr/listlivr.component';
import { ListmagasinComponent } from './composant/magasin/listmagasin/listmagasin.component';
import { RegisterComponent } from './composant/user/register/register.component';
import { LoginComponent } from './composant/user/login/login.component';
import{AuthGuardService} from './services/auth/auth-guard.service';
import { SidemenuComponent } from './composant/shared/sidemenu/sidemenu.component';
import { MenuComponent } from './composant/shared/menu/menu.component';
import { DashboardComponent } from './composant/shared/dashboard/dashboard.component';
import { AddcommandemagComponent } from './composant/commandemag/addcommandemag/addcommandemag.component';
import { ListcommandemagComponent } from './composant/commandemag/listcommandemag/listcommandemag.component';

const routes: Routes = [
  {path: '', component:DashboardComponent,canActivate:[AuthGuardService],children:[

    {
      path:"listeclient",
      component:ListeclientComponent
    },
  
    {
      path:"listecategorie",
      component:ListecategorieComponent
    },
    {
      path:"listearticle",
      component:ListearticleComponent
    },
    {
      path:"listesouscategorie",
      component:ListesouscategorieComponent
    },
    {
      path:"lcomm",
      component:ListcommandeComponent
    },
    
    {
      path:"lcommag",
      component:ListcommandemagComponent
    },
    {
      path:"llivr",
      component:ListlivrComponent
    },
    {
      path:"magasin",
      component:ListmagasinComponent
    },
    {
      path:"register",
      component:RegisterComponent
    },
    
    {
      path:"updatecategorie",
      component:UpdatecategorieComponent
    },
    {
      path:"updatesouscategorie",
      component:UpdatesouscategorieComponent
    },
    {
      path:"updateclient",
      component:UpdateclientComponent
    },
    {
      path:"updatearticle",
      component:UpdatearticleComponent
    }
    ,
    {
      path:"commande",
      component:AddcommandeComponent
    }
    ,
    {
      path:"commandemag",
      component:AddcommandemagComponent
    }
    ,
    {
      path:"livraison",
      component:AddlivrComponent
    }
  ]},
  {
    path:"login",
    component:LoginComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
