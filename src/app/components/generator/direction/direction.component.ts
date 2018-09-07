import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
    selector: 'direction-component',
    templateUrl: './direction.component.html',
    styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
    private direction: string;

    constructor(private cssGenerator: CssGeneratorService) { }

    ngOnInit() {
        this.cssGenerator.direction.subscribe(direction => this.direction = direction)   
    }

    onDirectionChange() {
        this.cssGenerator.changeDirectionInstance(this.direction)
    }

}
