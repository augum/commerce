import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from '../model/article';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public host:string="http://localhost:8080";
  private baseUrl = '/api/articlem';
  private baseUrl2 = '/api/article';
  private baseUrl1 = '/api/saveUserServer';
  private magasin;
  choixmenu : string  = 'A';
  listData : Article[];
  public dataForm:  FormGroup; 
  constructor(private http:HttpClient) { 
    this.magasin = localStorage.getItem('magasin');
  }

  public getArticle(){
    this.magasin = localStorage.getItem('magasin');
     return this.http.get(this.host+"/api/articlem/"+this.magasin);
  }

  public addAricle(article:Article){
      return this.http.post(this.host+"/articles",article);
 }
 /*public updateArticle(id:number,article:Article){
  return this.http.patch(id,article);
}*/
updateArticle(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl2}/${id}`, value);
}
getAll(){
  return this.http.get(this.host+"/article");
}
getAll1(): Observable<any> {
  this.magasin = localStorage.getItem('magasin');
  return this.http.get(`${this.baseUrl}/${this.magasin}`);
}
}
