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
}
