import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UbigeoData } from '../interfaces/ubigeo-data';
import { UbigeoService } from '../services/ubigeo.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit, OnDestroy {

  ubigeosSelected!: UbigeoData[];
  private ubigeoSuscription!: Subscription;

  constructor(
    private ubigeoService: UbigeoService
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.ubigeoService.getAllUbigeo().subscribe(
      res => this.ubigeosSelected = res
    );
    this.ubigeoService.getUbigeoPromise('150113').then(res => console.log(res));
    this.ubigeoSuscription = this.ubigeoService.getUbigeo('150101').subscribe(res => console.log(res));
  }

  mapClicler(ubigeo: string): void {
    console.log(">> valor recibido", ubigeo);
  }

  ngOnDestroy() {
    console.log("Destruyendo componente MapContainerComponent");
    this.ubigeoSuscription.unsubscribe();
  }
}
