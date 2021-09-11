import { Component, OnInit } from '@angular/core';
import { UbigeoData } from '../interfaces/ubigeo-data';
import { UbigeoService } from '../services/ubigeo.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  ubigeosSelected!: UbigeoData[];

  constructor(
    private ubigeoService: UbigeoService
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.ubigeosSelected = this.ubigeoService.getAllUbigeo();
    this.ubigeoService.getUbigeo('150113').then(res => console.log(res))
  }

  mapClicler(ubigeo: string): void {
    console.log(">> valor recibido", ubigeo);
  }
}
