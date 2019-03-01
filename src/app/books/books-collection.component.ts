import { Component } from "@angular/core";
import { SelectItem } from "node_modules/primeng/components/common/selectitem";
import { Book } from "../Interfaces/book";
import { HttpService } from "../http/http.service";

@Component({
    selector: 'books-collection',
    templateUrl: './books-collection.component.html'
})
export class BooksCollectionComponent {
    books: Book[];
    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        let randomWords = require('random-words');

        let word: string = randomWords();
        
        this.getBooksByQuery([word]);

        this.sortOptions = [
            {label: 'First published', value: '!volumeInfo.publishedDate'},
            {label: 'Newest published', value: 'volumeInfo.publishedDate'}
        ];

    }

    // Delete this later
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