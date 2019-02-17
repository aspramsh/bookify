import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { PartialMaterialModule } from './core/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { PopularBooksComponent } from './popular-books/popular-books.component';

const appRoutes: Routes = [
  { path: '', component: PopularBooksComponent, data: { title: 'Popular Books' } }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PopularBooksComponent
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
