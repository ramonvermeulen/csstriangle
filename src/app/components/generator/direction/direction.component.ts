import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
    selector: 'direction-component',
    templateUrl: './direction.component.html',
    styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
    public direction: string;
    public type: string;

    constructor(private cssGenerator: CssGeneratorService) { }

    ngOnInit() {
        this.cssGenerator.direction.subscribe(direction => this.direction = direction)
        this.cssGenerator.type.subscribe(type => this.type = type)   
    }

    onDirectionChange() {
        this.cssGenerator.changeDirectionInstance(this.direction)
    }

}
