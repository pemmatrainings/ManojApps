import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FldexmnrviewComponent } from './fldexmnrview/fldexmnrview.component';
import { FldexmnrhomeComponent } from './fldexmnrhome/fldexmnrhome.component';
import { CerfhomeComponent } from './cerfhome/cerfhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FldexmnrviewComponent,
    FldexmnrhomeComponent,
    CerfhomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
