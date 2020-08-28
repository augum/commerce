import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Souscategorie} from '../model/souscategorie';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class SouscategorieService {

  public host:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getSCategorie(){
     return this.http.get(this.host+"/scategories");
  }
  public getdata(url:string){
    return this.http.get(url);
 }
  public addSCategorie(scategorie:Souscategorie){
      return this.http.post(this.host+"/scategories",scategorie);
 }
 public updateSCategoriet(url:string,scategorie:Souscategorie){
  return this.http.patch(url,scategorie);
}
supprimerSCategorie(url:string){
  return this.http.delete(url);
 }
}
