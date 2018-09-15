import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
    selector: 'type-component',
    templateUrl: './type.component.html',
    styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
    private type: string;
    private direction: string;
    private isosceles: Array<string> = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];


    constructor(private cssGenerator: CssGeneratorService) { }

    ngOnInit() {
        this.cssGenerator.type.subscribe(type => this.type = type)
        this.cssGenerator.direction.subscribe(direction => this.direction = direction)
    }

    onTypeChange() {
        this.cssGenerator.changeTypeInstance(this.type)
    }

    isEquilateralEnabled() {
        if(this.isosceles.includes(this.direction)) {
            this.type = (this.type === 'equilateral') ? 'isosceles' : this.type = this.type;
            this.onTypeChange();
            return false;
        }
        return true;
    }

}
