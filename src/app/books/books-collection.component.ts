import { Component } from "@angular/core";
import { Book } from "../Interfaces/book";
import { HttpService } from "../http/http.service";

@Component({
    selector: 'books-collection',
    templateUrl: './books-collection.component.html'
})
export class BooksCollectionComponent {
    books: Book[];

    page = 0;
    size = 4;

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        let randomWords = require('random-words');

        let word: string = randomWords();
        
        this.getBooksByQuery([word]);

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
}