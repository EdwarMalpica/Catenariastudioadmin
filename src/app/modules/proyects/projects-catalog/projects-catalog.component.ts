import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { AppState } from '@app/data/app.state';
import { isLoading, isLoadingButton } from '@app/data/shared/shared.action';
import { getIsLoadingButton } from '@app/data/shared/shared.selector';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects-catalog',
  templateUrl: './projects-catalog.component.html',
  styleUrls: ['./projects-catalog.component.css'],
})
export class ProjectsCatalogComponent implements OnInit {
  constructor(
    private api: ApiService,
    private route: Router,
    private alerts: AlertsService,
    private store: Store<AppState>
  ) {
    this.store.dispatch(isLoading({ isLoading: true }));
  }

  proyectos = [];
  ApiUrl = environment.apiUrl;
  selectedProjectId: any;
  isLoadingButton: Observable<boolean>;
  ngOnInit(): void {
    this.isLoadingButton = this.store.select(getIsLoadingButton);
    this.getProjects();
  }

  getProjects() {
    this.api.get('proyectos').subscribe({
      next: (data: any) => {
        this.proyectos = data.proyectos;
        this.store.dispatch(isLoading({ isLoading: false }));
      },
      error: (error) => {
        this.alerts.showError(error.error.message);
        this.store.dispatch(isLoading({ isLoading: false }));
      },
    });
  }


  deleteProject(id: any) {
    this.selectedProjectId = id;
    this.store.dispatch(isLoadingButton({ isLoadingButton: true }));
    this.api.delete(`proyectos/${id}`).subscribe({
      next: (data: any) => {
        this.getProjects();
        this.alerts.showSuccess(data.message);
        this.selectedProjectId = null;
        this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
      },
      error: (error) => {
        this.alerts.showError(error.error.message);
        this.selectedProjectId = null;
        this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
      },
    });
  }
}
