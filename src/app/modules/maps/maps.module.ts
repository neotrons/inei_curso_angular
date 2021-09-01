import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { HomePage } from './pages/home/home.page';
import { MapContainerComponent } from './map-container/map-container.component';
import { MapRenderComponent } from './map-render/map-render.component';


@NgModule({
  declarations: [
    HomePage,
    MapContainerComponent,
    MapRenderComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
