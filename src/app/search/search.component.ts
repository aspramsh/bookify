import { Component, OnInit, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { debounceTime } from 'rxjs/operators';

import { HttpService } from "../http/http.service";
import { AutoCompleteWord } from "../Interfaces/autoCompleteWord";

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: [
        './search.component.css'
    ]
})
export class SearchComponent implements OnInit {
    tokens: string[];

    options: AutoCompleteWord[] = [];

    searchTerm : FormControl = new FormControl();

    constructor(private httpService: HttpService, private router: Router) {}

    ngOnInit() {
        this.searchTerm.valueChanges
        .pipe(debounceTime(400))
        .subscribe((data: string) => {
            this.httpService.getAutoCompleteSuggestions(data).subscribe(response =>{
                this.options = response
            })
        })
    }

    onEnter(value: string): void {
        if (!value)
            return;
        this.tokens = value.split(" ") ;
        let query: string = this.tokens[0];
        for (let i = 1; i < this.tokens.length; ++i) {
            query += '+' + this.tokens[i];
        }
        this.router.navigate(['/book-lists/' + ':' + query]);
    }
}