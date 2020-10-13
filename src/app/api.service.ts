import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'ba295f8be41a4fb4bb4c55e84ef45823';
  getNews(){
    return this.httpClient.get('https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json');
  }

  constructor(
    private httpClient: HttpClient
  ) { }
  
}
