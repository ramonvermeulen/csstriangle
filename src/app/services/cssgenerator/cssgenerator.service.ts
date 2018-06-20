import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class CssGeneratorService {

    private directionInstance = new BehaviorSubject<string>("top");
    private typeInstance = new BehaviorSubject<string>("equilateral");

    direction = this.directionInstance.asObservable();
    type = this.typeInstance.asObservable();

    constructor() { }

    changeDirectionInstance(direction: string) {
        this.directionInstance.next(direction)
    }

    changeTypeInstance(type: string) {
        this.typeInstance.next(type)
    }

}
