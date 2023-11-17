import { Component } from '@angular/core';
import { PerfilService } from '../../perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento: Date | null = null;
  telefono: string = '';
  email: string = '';
  perfilOriginal: any = {}; // Guarda una copia del perfil original

  constructor(private perfilService: PerfilService) {
    // Aquí cargo la información del perfil del usuario desde el servicio
    this.cargarPerfil();
  }

  // Método para cargar el perfil original desde el servicio
  cargarPerfilOriginal() {
    this.perfilOriginal = { ...this.perfilService.getPerfil() };
  }

  cargarPerfil() {
    this.perfilService.getPerfil().subscribe((perfil: any) => {
      this.nombre = perfil.nombre;
      this.apellido = perfil.apellido;
      this.fechaNacimiento = new Date(perfil.fechaNacimiento);
      this.telefono = perfil.telefono;
      this.email = perfil.email;
    });
  }

  // Método para guardar el perfil del usuario
  guardarPerfil() {
    // Creo un objeto con los datos actualizados del perfil
    const nuevoPerfil = {
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento?.toISOString() || '', // Convierte Date a cadena ISO --Z
      telefono: this.telefono,
      email: this.email,
    };

    // Llamo al servicio para actualizar el perfil del usuario
    this.perfilService.updatePerfil(nuevoPerfil);

    // Actualizo el perfil original para que coincida con el nuevo perfil
    this.cargarPerfilOriginal();


  }

  cancelarEdicion() {
    // Restauro los valores originales desde el perfil original
    this.nombre = this.perfilOriginal.nombre;
    this.apellido = this.perfilOriginal.apellido;
    this.fechaNacimiento = new Date(this.perfilOriginal.fechaNacimiento);
    this.telefono = this.perfilOriginal.telefono;
    this.email = this.perfilOriginal.email;
  }

}
