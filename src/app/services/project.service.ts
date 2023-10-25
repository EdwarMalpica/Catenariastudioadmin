import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  private api:string = 'http://127.0.0.1:8000/api/proyectos';

  constructor(private http: HttpClient) {

  }

  public updateProject(project: any): Observable<any>{
    return this.http.post<any>(this.api, project);
  }

  public getProject(projectId: number):Observable<any>{
    return this.http.get<any>(this.api + "/" + projectId);

  }

}
