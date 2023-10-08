import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() { }

  private perfil = {
    nombre: 'Annie',
    apellido: 'Anne',
    fechaNacimiento: '1990-01-01',
    telefono: '123-456-7890',
    email: 'anie@anne.com',
  };

 // Método para obtener el perfil del usuario
 getPerfil(): Observable<any> {
  return of(this.perfil); // Convierte el objeto en un observable
}

// Método para actualizar el perfil del usuario
updatePerfil(nuevoPerfil: any) {
  // Lógica para actualizar el perfil en el servidor
  // realizar una solicitud HTTP POST al servidor -- Acá --
  // Se actualiza el perfil en la variable interna.
  this.perfil = { ...nuevoPerfil };
}


}
