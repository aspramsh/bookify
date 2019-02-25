import { Component, OnInit } from "@angular/core";

import { HttpService } from "../http/http.service";
import { Book } from "../Interfaces/book";

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: [
        './search.component.css'
    ]
})
export class SearchComponent implements OnInit {
    searchValue: string = '';

    books: Book[];

    constructor(private httpService: HttpService) {}

    ngOnInit() {
        let e: number = 0;
    }

    private getBooksByQuery(tokens: string[]) {
        let query: string = tokens[0];
        for (let i = 1; i < tokens.length; ++i) {
            query += '+' + tokens[i];
        }
        
        this.httpService.getBooks(query)
          .subscribe((data) => {
          this.books = <Book[]>data['items'];
        });
    }

    onEnter(value: string) { 
        this.searchValue = value;
        let tokens: string[] = value.split(" ");

        this.getBooksByQuery(tokens);
    }
}