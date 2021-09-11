import { Injectable } from '@angular/core';
import { UbigeoData } from '../interfaces/ubigeo-data';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor() { }

  getAllUbigeo(): UbigeoData[] {
    return [];
  }

  getUbigeo(ubigeo: string): Promise<UbigeoData> {
    return new Promise((resolve, reject) => {});
  }
}
