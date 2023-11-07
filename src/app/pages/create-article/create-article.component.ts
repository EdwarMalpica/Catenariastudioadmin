import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '@app/services/api/api-service.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent {
  titulo;
  fecha_creacion;
  descripcion;
  user_id;
  contenido;
  miniatura;
  img: any[] = [];
  formulario: FormGroup;

  constructor(private api: ApiServiceService, private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      contenido: ['', Validators.required],
    });
  }

  uploadFileImg(event) {
    for (let file of event.files) {
      this.img.push(file);
    }

  }

  uploadFileMiniatura(event) {
    this.miniatura = event.files[0];
  }

}
