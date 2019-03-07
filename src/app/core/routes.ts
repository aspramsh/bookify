import { Routes } from "@angular/router";

import { SearchComponent } from '../search/search.component';
import { BooksCollectionComponent } from "../books/books-collection.component";
import { BookDetailsComponent } from "../book-details/book-details.component";


export const routes: Routes = [
    { path: '', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'search', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'book-lists/:query', component: BooksCollectionComponent, data: { title: 'Book Card'} },
    { path: 'book-lists', component: BooksCollectionComponent, data: { title: 'Book Card'} },
    { path: 'book-details/:id', component: BookDetailsComponent, data: { title: 'Book Card'} }
]