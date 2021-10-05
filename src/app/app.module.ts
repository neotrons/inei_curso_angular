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
import { WebsiteLayout } from './layouts/website/website.layout';
import { AdministratorLayout } from './layouts/administrator/administrator.layout';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    WebsiteLayout,
    AdministratorLayout,
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
