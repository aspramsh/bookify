import { Component, Input, OnInit } from "@angular/core";
import { Book } from "src/app/Interfaces/book";
import { Router } from "@angular/router";

@Component({
    selector: 'single-book',
    templateUrl: './single-book.component.html',
    styleUrls: [
        './single-book.component.css'
    ]
})
export class SingleBookComponent implements OnInit{
    @Input() book: Book;

    query: string;

    authors: string = 'Not Specified';

    categories: string = 'Not Specified';
    
    constructor(private router: Router) { }

    ngOnInit() {
        if (this.book && this.book.volumeInfo) {
            if (this.book.volumeInfo.authors) {
                this.authors = this.book.volumeInfo.authors.join(', ');
                this.query = 'authors:' + this.authors.split(/[\s,]+/).join('+');
            }
            
            if (this.book.volumeInfo.categories) {
                this.categories = this.book.volumeInfo.categories.join(', ');
            }
        }
    }
    
    getDeatails(): void {
        this.router.navigate(['/book-details/' + this.book.id]);
    }
}