import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UbigeoData } from '../interfaces/ubigeo-data';

@Injectable({
  providedIn: 'root'
})
export class UbigeoApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUbigeo(): Observable<UbigeoData[]> {
    return this.http.get<UbigeoData[]>(`http://localhost:8000/api/v1/ubigeos/`);
  }

  getUbigeoPromise(ubigeo: string): Promise<UbigeoData> {
    return this.http.get<UbigeoData>(`http://localhost:8000/api/v1/ubigeos/${ubigeo}/`).toPromise();
  }

  getUbigeo(ubigeo: string): Observable<UbigeoData> {
    return this.http.get<UbigeoData>(`http://localhost:8000/api/v1/ubigeos/${ubigeo}/`);
  }
}
