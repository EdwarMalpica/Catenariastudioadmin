import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { AppState } from '@app/data/app.state';
import { isLoadingButton } from '@app/data/shared/shared.action';
import { getIsLoadingButton } from '@app/data/shared/shared.selector';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  titulo;
  fecha_creacion;
  descripcion;
  user_id;
  contenido;
  miniatura;
  model;
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
  uploadFileModel(event) {
    this.model = event.files[0];
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
    for (let i = 0; i < this.img.length; i++) {
      formData.append('img' + i, this.img[i]);
    }
    formData.append('miniatura', this.miniatura);
    formData.append('model', this.model);

    formData.append('data', JSON.stringify(data));
    this.api.postFormData('proyectos/create', formData).subscribe(
      (data) => {
        this.alerts.showSuccess('Proyecto creado correctamente');
        this.router.navigate(['/proyects']);
        this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
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
