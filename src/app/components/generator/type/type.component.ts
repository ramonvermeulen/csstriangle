import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
    selector: 'type-component',
    templateUrl: './type.component.html',
    styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
    private type: string;

    constructor(private cssGenerator: CssGeneratorService) { }

    ngOnInit() {
        this.cssGenerator.type.subscribe(type => this.type = type)
    }

    onTypeChange() {
        this.cssGenerator.changeTypeInstance(this.type)
    }

}
