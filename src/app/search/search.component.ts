import { Component, OnInit } from "@angular/core";

import { HttpService } from "../http/http.service";
import { Book } from "../Interfaces/book";
import { stringify } from "querystring";

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
        
    }

    private getBooksByQuery(tokens: string[]) {
        let query: string = tokens[0];
        for (let i = 1; i < tokens.length; ++i) {
            query += '+' + tokens[i];
        }
        
        this.httpService.getBooks(query)
          .subscribe((data) => {
          this.books = <Book[]>data['items'];
          let e: string = this.books[0].id;
        });
    }

    onEnter(value: string) { 
        this.searchValue = value;
        let tokens: string[] = value.split(" ");

        this.getBooksByQuery(tokens);
    }
}