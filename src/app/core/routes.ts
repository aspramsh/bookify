import { Routes } from "@angular/router";

import { SearchComponent } from '../search/search.component';
import { SingleBookComponent } from "../books/book/single-book.component";


export const routes: Routes = [
    { path: '', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'search', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'singleBook', component: SingleBookComponent, data: { title: 'Book Card'} }
]