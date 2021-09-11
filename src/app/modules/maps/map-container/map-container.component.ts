import { Component, OnInit } from '@angular/core';
import { UbigeoData } from '../interfaces/ubigeo-data';
import { ubigeosSelectedMock } from '../mocks/ubigeos-selected.mock';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  ubigeoSelected: UbigeoData = ubigeosSelectedMock[1];

  ubigeosSelected: UbigeoData[] = ubigeosSelectedMock;

  constructor() { }

  ngOnInit(): void {
  }

  mapClicler(ubigeo: string): void {
    console.log(">> valor recibido", ubigeo);
  }
}
