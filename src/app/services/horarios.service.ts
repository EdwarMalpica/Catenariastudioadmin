import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HorariosRequest } from '@app/models/dtos/horarios-request.interface';
import { HorariosResponse } from '@app/models/dtos/horarios-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) {

  }

  public getSchedule(): Observable<HorariosResponse>{
    return this.http.get<HorariosResponse>('http://127.0.0.1:8000/api/horarios');
  }

  public addSchedule(schedule:HorariosRequest): Observable<HorariosResponse>{
    return this.http.post<HorariosResponse>('http://127.0.0.1:8000/api/horarios', schedule);
  }

  public updatedSchedule(schedule:HorariosRequest): Observable<HorariosResponse>{
    return this.http.put<HorariosResponse>('http://127.0.0.1:8000/api/horarios', schedule);
  }


}
