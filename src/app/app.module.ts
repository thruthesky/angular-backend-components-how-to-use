import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularBackendModule } from 'angular-backend';
import { AngularBackendComponents } from '../angular-backend-components/angular-backend-components.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularBackendModule.forRoot(),
    AngularBackendComponents
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }


