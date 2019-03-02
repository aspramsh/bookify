import { Routes } from "@angular/router";

import { SearchComponent } from '../search/search.component';
import { BooksCollectionComponent } from "../books/books-collection.component";
import { SingleBookComponent } from "../books/book/single-book.component";


export const routes: Routes = [
    { path: '', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'search', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'book-lists/:query', component: BooksCollectionComponent, data: { title: 'Book Card'} },
    { path: 'book-lists', component: BooksCollectionComponent, data: { title: 'Book Card'} },
    { path: 'singleBook', component: SingleBookComponent, data: { title: 'Book Card'} }
]