import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: [
        './search.component.css'
    ]
})
export class SearchComponent implements OnInit {
    tokens: string[];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onEnter(value: string) {
        this.tokens = value.split(" ") ;
        let query: string = this.tokens[0];
        for (let i = 1; i < this.tokens.length; ++i) {
            query += '+' + this.tokens[i];
        }
        this.router.navigate(['/book-lists/' + ':' + query]);
    }
}