import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes } from './core/routes';
import { HttpService } from './http/http.service';
import { AppComponent } from './app.component';
import { PartialMaterialModule } from './core/material.module';
import { PartialPrimeNgModule } from './core/primeng.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { SingleBookComponent } from './books/book/single-book.component';
import { BooksCollectionComponent } from './books/books-collection.component';
import { StarComponent } from './books/book/star-rating/star.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    BooksCollectionComponent,
    SingleBookComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    PartialMaterialModule,
    PartialPrimeNgModule,
    RouterModule.forRoot(
      routes
    ),
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
