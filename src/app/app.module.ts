import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ExampleModule } from './example/example.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { UbigeoService, } from './modules/maps/services/ubigeo.service';
import { UbigeoMockService } from './modules/maps/services/ubigeo-mock.service';
import { UbigeoApiService } from './modules/maps/services/ubigeo-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExampleModule,
  ],
  providers: [
    {provide: UbigeoService, useClass: UbigeoApiService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
