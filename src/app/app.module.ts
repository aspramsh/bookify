import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { PartialMaterialModule } from './core/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent, data: { title: 'Search for Books' } }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PartialMaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
