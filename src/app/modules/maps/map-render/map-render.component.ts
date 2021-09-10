import { Component, OnInit, Input } from '@angular/core';
import { UbigeoData } from '../interfaces/ubigeo-data';

@Component({
  selector: 'app-map-render',
  templateUrl: './map-render.component.html',
  styleUrls: ['./map-render.component.scss']
})
export class MapRenderComponent implements OnInit {

  @Input() data!: UbigeoData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
