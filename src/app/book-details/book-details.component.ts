import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HttpService } from "../http/http.service";
import { Book } from "../Interfaces/book";

@Component({
    templateUrl: './book-details.component.html',
    styleUrls: [
        './book-details.component.css'
    ]
})
export class BookDetailsComponent implements OnInit{
    book: Book;
    id: string;

    authors: string = 'Not Specified';
    categories: string = 'Not Specified';

    constructor(private httpService: HttpService,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.getBookById(this.id);
    }

    private getBookById(id: string) { 
        this.httpService.getBookDetail(id)
        .subscribe((data) => {
            this.book = <Book>data;
            if (this.book && this.book.volumeInfo) {
                if (this.book.volumeInfo.authors) {
                    this.authors = this.book.volumeInfo.authors.join(', ');
                }
                if (this.book.volumeInfo.categories) {
                    this.categories = this.book.volumeInfo.categories.join(', ');
                }
            }
        });
    }

    onNavigate(url: string) {
        window.open(url, "_blank");
    }
}