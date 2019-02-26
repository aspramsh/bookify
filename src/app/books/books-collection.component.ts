import { Component } from "@angular/core";
import { Book } from "../Interfaces/book";
import { SelectItem } from "node_modules/primeng/components/common/selectitem";
import { HttpService } from "../http/http.service";

@Component({
    selector: 'books-collection',
    templateUrl: './books-collection.component.html'
})
export class BooksCollectionComponent {
    books: Book[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    sortOptions: SelectItem[];

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        let randomWords = require('random-words');

        let word: string = randomWords();
        
        this.getBooksByQuery([word]);

        this.sortOptions = [
            {label: 'Newest First', value: '!publishedDate'},
            {label: 'Oldest First', value: 'publishedDate'}
            //{label: 'Brand', value: 'brand'}
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