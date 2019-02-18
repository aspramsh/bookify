import { Routes } from "@angular/router";

import { SearchComponent } from '../search/search.component';


export const routes: Routes = [
    { path: '', component: SearchComponent, data: { title: 'Search for Books' } },
    { path: 'search', component: SearchComponent, data: { title: 'Search for Books' } }
]