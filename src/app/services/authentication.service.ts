import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogins } from '@app/models/dtos/user-logins.iterface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getNumberOfAuthentications(user_id: number): Observable<UserLogins> {
    // reemplazar la URL con endpoint
    const apiUrl = 'http://localhost:8000/api/auth/authentication/'+ user_id;

    return this.http.get<UserLogins>(apiUrl);
  }

  // Después de una autenticación exitosa
sendSuccessfulAuthentication(userId: string, timestamp: Date) {
  const data = { userId, timestamp };
  this.http.post('/auth/success', data).subscribe(response => {
    console.log('Autenticación exitosa registrada');
  });
}

//Mapeo:
getDatabaseData() {
  return this.http.get('/api/database'); // Reemplazar url
}

getAuthenticationData(): Observable<any[]> {
  // Realizo una solicitud HTTP para obtener los datos de autenticación
  return this.http.get<any[]>('/api/authenticationData');
}
}

