import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/Interfaces/book";

@Component({
    selector: 'single-book',
    templateUrl: './single-book.component.html',
    styleUrls: [
        './single-book.component.css'
    ]
})
export class SingleBookComponent implements OnInit{
    book: any;
    
    constructor() { }

    starList: string[] = [];

    ngOnInit() {
        this.book = {
            id: "POny_3SvXIkC",
            volumeInfo: {
                title: "Hello World!",
                authors: [ "Paul Crouch" ],
                publisher: "Thomas Nelson",
                publishedDate: new Date("2003-04-15"),
                categories: [
                    "Biography & Autobiography"
                ],
                averageRating: 4.2,
                imageLinks: {
                    smallThumbnail: "http://books.google.com/books/content?id=POny_3SvXIkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                }
            }
        }

        this.createStarList();
    }

    createStarList(): void {
        let i = 1;
        for(i = 1; i<=5; i++) {
            if (i <= this.book.volumeInfo.averageRating) {
              this.starList.push("fa fa-star");
            }
        }

        if (this.book.volumeInfo.averageRating % 1 > 0) {
            this.starList.push("fa fa-star-half-o");
        }
    }
    
}