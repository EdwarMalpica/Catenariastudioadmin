import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient, private cookieService:CookieService) { }

  saveToken(token:string){
    this.cookieService.set('token',token);
  }
  getToken(){
    if(this.cookieService.check('token')===true){
      return this.cookieService.get('token');
    }
    return '';
  }
  saveUser(user:any){
    this.cookieService.set('user',JSON.stringify(user));
  }
  getUser(){
    if (this.cookieService.check('user')===true) {
      return JSON.parse(this.cookieService.get('user')!);
    }

  }
  logout(){
    this.cookieService.delete('token');
    this.cookieService.delete('user');
  }

}
