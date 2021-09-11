import { Injectable } from '@angular/core';
import { UbigeoService } from './ubigeo.service';
import { UbigeoData } from '../interfaces/ubigeo-data';
import { ubigeosSelectedMock } from '../mocks/ubigeos-selected.mock';


@Injectable({
  providedIn: 'root'
})
export class UbigeoMockService extends UbigeoService {

  constructor() { 
    super();
  }

  getAllUbigeo(): UbigeoData[] {
    return ubigeosSelectedMock;
  }

  getUbigeo(ubigeo: string): Promise<UbigeoData> {
    return new Promise((resolve, reject) => {
      const ubigeoValue: UbigeoData | undefined  = ubigeosSelectedMock.find(element => element.ubigeo === ubigeo);
      if (ubigeoValue) {
        resolve(ubigeoValue);
      }
      else {
        reject('ubigeo no existe');
      }
    });
  }
}
