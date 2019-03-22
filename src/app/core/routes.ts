import { Routes } from "@angular/router";

import { SearchComponent } from '../search/search.component';
import { BooksCollectionComponent } from "../books/books-collection.component";
import { BookDetailsComponent } from "../book-details/book-details.component";
import { NotFoundComponent } from "../shared/not-found.component";


export const routes: Routes = [
    { path: '', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'search', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'book-lists/:query', component: BooksCollectionComponent, data: { title: 'Book Card'} },
    { path: 'book-lists', component: BooksCollectionComponent, data: { title: 'Book Card'}, runGuardsAndResolvers: 'always' },
    { path: 'book-details/:id', component: BookDetailsComponent, data: { title: 'Book Card'} },
    { path: 'not-found', component: NotFoundComponent, data: { title: 'Not Found'} },
    { path: '**', redirectTo: 'not-found' }
]