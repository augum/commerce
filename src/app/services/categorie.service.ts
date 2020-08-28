import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categorie} from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  public host:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getCategorie(){
     return this.http.get(this.host+"/categories");
  }

  public addCategorie(categorie:Categorie){
      return this.http.post(this.host+"/categories",categorie);
 }
 public updateCategoriet(url:string,categorie:Categorie){
  return this.http.patch(url,categorie);
}
supprimerCategorie(url:string){
  return this.http.delete(url);
 }
}
