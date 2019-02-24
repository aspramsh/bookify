import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
    @Input() rating;
    starWidth;
    
    ngOnInit(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}