import { Component } from "@angular/core";

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: [
        './search.component.css'
    ]
})
export class SearchComponent {
    searchValue: string = '';
    
    onEnter(value: string) { 
        this.searchValue = value; 
    }
}