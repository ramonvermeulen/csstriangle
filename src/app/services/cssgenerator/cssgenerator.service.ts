import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class CssGeneratorService {
    private directionInstance = new BehaviorSubject<string>("top");
    private typeInstance = new BehaviorSubject<string>("equilateral");
    private widthInstance = new BehaviorSubject<number>(200);
    private heightInstance = new BehaviorSubject<number>(100);
    private leftInstance = new BehaviorSubject<number>(100);
    private rightInstance = new BehaviorSubject<number>(100);
    private topInstance = new BehaviorSubject<number>(50);
    private bottomInstance = new BehaviorSubject<number>(50);
    private colorInstance = new BehaviorSubject<string>("#ff0000")

    /* generated instances */
    private borderWidthInstance = new BehaviorSubject<string>("0 100px 173.3px 100px")
    private borderColorInstance = new BehaviorSubject<string>("transparent transparent #6980fe transparent")


    direction = this.directionInstance.asObservable();
    type = this.typeInstance.asObservable();
    width = this.widthInstance.asObservable();
    height = this.heightInstance.asObservable();
    left = this.leftInstance.asObservable();
    right = this.rightInstance.asObservable();
    top = this.topInstance.asObservable();
    bottom = this.bottomInstance.asObservable();
    color = this.colorInstance.asObservable();

    /* generated observables */
    borderWidth = this.borderWidthInstance.asObservable();
    borderColor = this.borderColorInstance.asObservable();

    constructor() { }

    changeDirectionInstance(direction: string) {
        this.directionInstance.next(direction)
    }

    changeTypeInstance(type: string) {
        this.typeInstance.next(type)
    }

    changeWidthInstance(width: number) {
        this.widthInstance.next(width)
    }

    changeHeightInstance(height: number) {
        this.heightInstance.next(height)
    }

    changeLeftInstance(left: number) {
        this.leftInstance.next(left)
    }

    changeRightInstance(right: number) {
        this.rightInstance.next(right)
    }

    changeTopInstance(top: number) {
        this.topInstance.next(top)
    }

    changeBottomInstance(bottom: number) {
        this.bottomInstance.next(bottom)
    }

    changeColorInstance(color: string) {
        this.colorInstance.next(color)
    }

}
