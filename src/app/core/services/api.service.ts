import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, switchMap } from 'rxjs';
import { AppState } from 'src/app/data/app.state';
import { getToken } from 'src/app/data/auth/auth.selector';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = environment.apiUrl;
  isAuth: Observable<boolean>;
  headers: HttpHeaders = new HttpHeaders();
  isToken: boolean = false;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private alerts: AlertsService
  ) {
     this.store.select(getToken).subscribe({
      next: (token) => {
        if (token) {
          this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: token ? `Bearer ${token}` : '',
          });
          this.isToken = true;
        } else {
          this.isToken = false;
        }
      },
    });
  }


  get(url: string) {
    if (this.isToken) {
      return this.http.get(`${this.API_URL}/api/${url}`, {
        headers: this.headers,
      });
    } else {
      return this.http.get(`${this.API_URL}/api/${url}`);
    }
  }

  post(url: string, data: any) {
    if (this.isToken) {
      return this.http.post(`${this.API_URL}/api/${url}`, data, {
        headers: this.headers,
      });
    } else {
      return this.http.post(`${this.API_URL}/api/${url}`, data);
    }
  }

  put(url: string, data: any) {
    if (this.isToken) {
      return this.http.put(`${this.API_URL}/api/${url}`, data, {
        headers: this.headers,
      });
    } else {
      return this.http.put(`${this.API_URL}/api/${url}`, data);
    }

  }

  delete(url: string) {
    if (this.isToken) {
      return this.http.delete(`${this.API_URL}/api/${url}`, {
        headers: this.headers,
      });
    } else {
      return this.http.delete(`${this.API_URL}/api/${url}`);
    }
  }
}
