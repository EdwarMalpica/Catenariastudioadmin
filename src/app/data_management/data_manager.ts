import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { AppointmentList } from "./appointment_model";


const apiUrl = "http://localhost:8000/api/"

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) {}

  public getAppontensBy(search_ep:string, params: HttpParams = new HttpParams()): Observable<AppointmentList> {
    console.log("RUTAA : " ,  apiUrl+search_ep)
    return this.http.get<AppointmentList>(apiUrl+search_ep, {params});
  }





}
