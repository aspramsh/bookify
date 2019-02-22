import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PartialMaterialModule } from './core/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { routes } from './core/routes';
import { ConfigService } from './config/config.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PartialMaterialModule,
    RouterModule.forRoot(
      routes
    ),
    HttpClientModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
