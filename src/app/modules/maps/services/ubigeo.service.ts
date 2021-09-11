import { Injectable } from '@angular/core';
import { UbigeoData } from '../interfaces/ubigeo-data';
import { ubigeosSelectedMock } from '../mocks/ubigeos-selected.mock';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor() { }

  getAllUbigeo(): UbigeoData[] {
    return ubigeosSelectedMock;
  }
}
