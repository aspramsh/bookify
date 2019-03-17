import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { SelectItem } from "node_modules/primeng/components/common/selectitem";

import { Book } from "../Interfaces/book";
import { HttpService } from "../http/http.service";

@Component({
    selector: 'books-collection',
    templateUrl: './books-collection.component.html'
})
export class BooksCollectionComponent {
    tokens: string;

    books: Book[] = [];
    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    constructor(private httpService: HttpService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.tokens = this.route.snapshot.params['query'];
        
        if (!this.tokens) {
            let randomWords = require('random-words');
            let word: string = randomWords();
            this.tokens = word;
        }
        
        this.getBooksByQuery(this.tokens);

        this.sortOptions = [
            {label: 'First published', value: '!volumeInfo.publishedDate'},
            {label: 'Newest published', value: 'volumeInfo.publishedDate'}
        ];

        this.route.params.subscribe(params => {
            // PARAMS CHANGED .. TO SOMETHING REALLY COOL HERE ..
       
            // for example extract the query..
            let query = params['query'];

            this.getBooksByQuery(query);
       
          });

    }

    private getBooksByQuery(tokens: string) { 
        this.httpService.getBooks(tokens)
          .subscribe((data) => {
          this.books = <Book[]>data['items'];
          this.books = this.books.filter(b => b.volumeInfo.title.length <= 60 
            && b.volumeInfo.imageLinks !== undefined);
        });
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }


}