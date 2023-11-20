import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Appointment, AppointmentList } from "./appointment_model";


const apiUrl = "http://localhost:8000/api/"

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) {}

  public getAppontensBy(search_ep:string, params: HttpParams = new HttpParams()): Observable<AppointmentList> {
    return this.http.get<AppointmentList>(apiUrl+search_ep, {params});
  }

  public editAppointment(search_ep: string, body: any, params: HttpParams = new HttpParams()): Observable<Appointment> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { params, headers };
    return this.http.post<Appointment>(apiUrl + search_ep, body, options);
  }







}
