import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'direction-component',
    templateUrl: './direction.component.html',
    styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
    public direction;

    constructor() { }

    ngOnInit() {
    }

}
