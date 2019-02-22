import { Component, OnInit, OnDestroy } from "@angular/core";

import { ConfigService } from "../config/config.service";
import {  Config } from "../Interfaces/config";

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: [
        './search.component.css'
    ]
})
export class SearchComponent implements OnInit, OnDestroy {
    searchValue: string = '';

    config: Config;

    constructor(private configService: ConfigService) {}

    ngOnInit() {
        this.showConfig();
    }

    showConfig() {
        this.configService.getConfig()
          .subscribe((data: Config) => this.config = {
            searchUrl: data['searchUrl']
          });
      }

    ngOnDestroy() {

    }

    onEnter(value: string) { 
        this.searchValue = value; 
    }
}