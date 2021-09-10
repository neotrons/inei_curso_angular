import { Component, OnInit } from '@angular/core';
import { UbigeoData } from '../interfaces/ubigeo-data'; 

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  ubigeoSelected: UbigeoData = {
    ubigeo: "150113",
    nombre: "Jesus Maria",
    point: [1234, 9876]
  }
  constructor() { }

  ngOnInit(): void {
  }
}