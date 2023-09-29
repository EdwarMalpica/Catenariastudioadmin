import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Credential } from "../../models/credential";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credential: Credential): Observable<string> {
    return this.http
      .post<string>(
        'http://localhost:8000/api/auth/login',
        {
          email: credential.email,
          password: credential.password,
        }
      )
      .pipe(
        tap((response) => console.log(response)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrio un error: ', error)
    }
    return throwError(error)
  }
}
