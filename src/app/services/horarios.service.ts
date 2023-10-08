import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HorariosRequest } from '@app/models/dtos/horarios-request.interface';
import { HorariosResponse } from '@app/models/dtos/horarios-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  private api:string = 'http://127.0.0.1:8000/api/horarios';

  constructor(private http: HttpClient) {

  }



  public getSchedule(): Observable<HorariosResponse>{
    return this.http.get<HorariosResponse>(this.api);
  }

  public addSchedule(schedule:HorariosRequest): Observable<HorariosResponse>{
    return this.http.post<HorariosResponse>(this.api, schedule);
  }

  public updatedSchedule(schedule:HorariosRequest): Observable<HorariosResponse>{
    return this.http.post<HorariosResponse>(this.api, schedule);
  }


}
