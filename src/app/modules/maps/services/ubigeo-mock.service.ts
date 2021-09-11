import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAllUbigeo(): Observable<UbigeoData[]> {
    return new Observable<UbigeoData[]>(observer => { observer.next(ubigeosSelectedMock)});
  }

  private search(ubigeo: string): UbigeoData | undefined {
    return ubigeosSelectedMock.find(element => element.ubigeo === ubigeo);
  }

  getUbigeoPromise(ubigeo: string): Promise<UbigeoData> {
    return new Promise((resolve, reject) => {
      const ubigeoValue: UbigeoData | undefined  = this.search(ubigeo);
      if (ubigeoValue) {
        resolve(ubigeoValue);
      }
      else {
        reject('ubigeo no existe');
      }
    });
  }

  getUbigeo(ubigeo: string): Observable<UbigeoData> {
    return new Observable<UbigeoData>(observer => {
      const ubigeoValue: UbigeoData | undefined  = this.search(ubigeo);
      observer.next(ubigeoValue);
      // devulve multiples momentos
      setTimeout(()=> {
        observer.next(ubigeosSelectedMock[2]);
      }, 5000)
    });
  }
}
