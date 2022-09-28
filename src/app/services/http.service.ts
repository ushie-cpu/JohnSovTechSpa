import { Injectable } from '@angular/core';
import {HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private chuckNorrisBaseUrl = "https://api.chucknorris.io/";
  private baseUrl = "http://johnuj-001-site1.ftempurl.com/"
  private peopleUrl = "https://swapi.dev/api/people/"; 
  constructor(private http: HttpClient) { }

  getCategoryList() : Observable<string[]>{
      return this.http.get<string[]>(this.chuckNorrisBaseUrl+"/jokes/categories");
  }

  getPeopleList() : Observable<string[]>{
    return this.http.get<string[]>(this.peopleUrl);
}
}
