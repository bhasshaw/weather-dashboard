import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';


import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0HSUs9Z6phluKNemOU6g_g_qrKPwuUtA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
