import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UbigeoData } from '../interfaces/ubigeo-data';

@Component({
  selector: 'app-map-render',
  templateUrl: './map-render.component.html',
  styleUrls: ['./map-render.component.scss']
})
export class MapRenderComponent implements OnInit {

  @Input() data!: UbigeoData;
  @Output() clickMap: EventEmitter<string>;

  constructor() {
    this.clickMap = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(">>> valor a emitir", this.data.ubigeo);
    this.clickMap.emit(this.data.ubigeo);
  }

}
