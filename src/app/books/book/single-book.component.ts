import { Component, Input, OnInit } from "@angular/core";
import { Book } from "src/app/Interfaces/book";

@Component({
    selector: 'single-book',
    templateUrl: './single-book.component.html',
    styleUrls: [
        './single-book.component.css'
    ]
})
export class SingleBookComponent implements OnInit{
    @Input() book: Book;

    authors: string = 'Not Specified';

    categories: string = 'Not Specified';
    
    constructor() { }

    ngOnInit() {
        if (this.book && this.book.volumeInfo) {
            if (this.book.volumeInfo.authors) {
                this.authors = this.book.volumeInfo.authors.join(', ');
            }
            
            if (this.book.volumeInfo.categories) {
                this.categories = this.book.volumeInfo.categories.join(', ');
            }
        }
    }   
}