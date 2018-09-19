import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
    selector: 'type-component',
    templateUrl: './type.component.html',
    styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
    public type: string;
    private direction: string;
    private rightAngled: Array<string> = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];


    constructor(private cssGenerator: CssGeneratorService) { }

    ngOnInit() {
        this.cssGenerator.type.subscribe(type => this.type = type)
        this.cssGenerator.direction.subscribe(direction => this.direction = direction)
    }

    onTypeChange() {
        this.cssGenerator.changeTypeInstance(this.type)
    }

    isEquilateralIsoscelesScalaneEnabled() {
        if(this.rightAngled.includes(this.direction)) {
            this.type = 'right-angled'
            this.onTypeChange();
            return null;
        } else {
            this.type = (this.type === 'right-angled') ? 'equilateral' : this.type = this.type;
        }
        return true;
    }

}
