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
}
