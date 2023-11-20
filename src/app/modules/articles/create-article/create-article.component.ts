import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/data/app.state';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Observable } from 'rxjs';
import { getIsLoadingButton } from '@app/data/shared/shared.selector';
import { isLoadingButton } from '@app/data/shared/shared.action';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit{
  titulo;
  fecha_creacion;
  descripcion;
  user_id;
  contenido;
  miniatura;
  img: any[] = [];
  formulario: FormGroup;
  isLoadingButton:Observable<boolean>;
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private alerts: AlertsService
  ) {
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      contenido: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.isLoadingButton = this.store.select(getIsLoadingButton);
  }

  uploadFileImg(event) {
    for (let file of event.files) {
      this.img.push(file);
    }
  }

  uploadFileMiniatura(event) {
    this.miniatura = event.files[0];
  }


  createProject() {
    this.store.dispatch(isLoadingButton({ isLoadingButton: true }));
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const data = {
      titulo: this.formulario.get('titulo').value,
      fecha_creacion: formattedDate,
      descripcion: this.formulario.get('descripcion').value,
      user_id: 1,
      contenido: this.formulario.get('contenido').value,
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    for (let i = 0; i < this.img.length; i++) {
      formData.append('img' + i, this.img[i]);
    }
    formData.append('miniatura', this.miniatura);

    this.api.postFormData('articulos/create', formData).subscribe(
      (data) => {
        this.alerts.showSuccess('Articulo creado correctamente');
        this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
        this.router.navigate(['/articles']);
      },
      (error) => {
        this.alerts.showError(error.error.message);
        this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
      },
      () => {
      }
    );
  }
}
