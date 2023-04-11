import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adopcion } from '../models/adopcion';
import { AdopcionRequest } from '../models/adopcionRequest';
import { Response } from '../models/response';


@Injectable({
  providedIn: 'root'
})
export class AdopcionService {

  constructor(private http:HttpClient) {}

  guardarAdopcion(adopcion: AdopcionRequest): Observable<Response<Adopcion>> {
    const url = "http://localhost:8081/adopcion/guardarAdopcion";
    return this.http.post<Response<Adopcion>>(url,adopcion)
  }



}
