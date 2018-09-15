import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { MapasComponent } from './mapas/mapas/mapas.component';
import { PuntosListComponent } from './puntos-list/puntos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    MapasComponent,
    PuntosListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TestService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
