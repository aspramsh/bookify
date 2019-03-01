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
    
    constructor() { }

    ngOnInit() {
        
    }   
}