import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '@app/const/constantes';
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  apiUrl = API_URL;

  constructor(private http:HttpClient) { }


  get(url){
    return this.http.get(this.apiUrl + "/api" + url);
  }
  post(url, data){
    return this.http.post(this.apiUrl + '/api' + url, data);
  }
  put(url, data){
    return this.http.put(this.apiUrl + '/api' + url, data);
  }
  delete(url){
    return this.http.delete(this.apiUrl + '/api' + url);
  }

}