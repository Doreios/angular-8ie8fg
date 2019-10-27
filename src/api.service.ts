import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Article } from './app/models/article';
import { environment } from './environments/environment';


@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }
    public getArticles () : Observable<Article[]> {
        return this.http.get<Article[]>(environment.backendArticle);
    }
}