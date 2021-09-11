import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UbigeoData } from '../interfaces/ubigeo-data';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor() { }

  getAllUbigeo(): UbigeoData[] {
    return [];
  }

  getUbigeoPromise(ubigeo: string): Promise<UbigeoData> {
    return new Promise((resolve, reject) => {});
  }

  getUbigeo(ubigeo: string): Observable<UbigeoData> {
    return new Observable<UbigeoData>(observer => {});
  }
}
