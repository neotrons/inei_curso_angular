import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleModule } from './example/example.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { UbigeoService } from './modules/maps/services/ubigeo.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleModule,
  ],
  providers: [
    UbigeoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
